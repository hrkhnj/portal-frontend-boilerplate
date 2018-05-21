#
# ストアドプロシージャ
#
USE `portal` ;

DROP PROCEDURE IF EXISTS insert_article_search;

DELIMITER $$
CREATE PROCEDURE insert_article_search(
  IN $id INT,
  IN $code VARCHAR(128),
  IN $cp_id INT,
  IN $genre_id INT,
  IN $sub_genre_id INT,
  IN $hash_timestamp VARCHAR(128),
  IN $title VARCHAR(255),
  IN $short_title VARCHAR(32),
  IN $body TEXT,
  IN $article_type TINYINT,
  IN $post_start_date DATETIME,
  IN $post_end_date DATETIME,
  IN $category_composition_date DATETIME,
  IN $category_integration_time INT,
  IN $deleted_flag TINYINT,
  IN $created_date DATETIME,
  IN $updated_date DATETIME
)
     main:BEGIN
          /**
           * 検索用テーブル作成
           */
          -- 変数定義
          DECLARE $cp_name VARCHAR(64); -- CP名
          DECLARE $genre_name VARCHAR(24); -- ジャンル名
          DECLARE $category_id INT; -- ジャンルカテゴリID
          DECLARE $sub_genre_name VARCHAR(24); -- サブジャンル名
          DECLARE $unix_time_post_start_date INT; -- 掲載開始日(UNIX_TIMESTAMP)
          DECLARE $unix_time_post_end_date INT; -- 掲載終了日(UNIX_TIMESTAMP)
          DECLARE $unix_time_updated_date INT; -- 更新日(UNIX_TIMESTAMP)

          -- CP情報を取得
          SELECT
             name INTO $cp_name
          FROM
            cp
          WHERE
            id = $cp_id
          ;

          -- ジャンル情報を取得
          SELECT
            name,
            category_id INTO $genre_name, $category_id
          FROM
            genre
          WHERE
            id = $genre_id
          ;

          -- サブジャンル情報を取得
          SELECT
            name INTO $sub_genre_name
          FROM
            sub_genre
          WHERE
            id = $sub_genre_id
          ;

          -- post_start_dateのUNIX_TIMESTAMPを取得
          select unix_timestamp($post_start_date) INTO $unix_time_post_start_date;
          -- post_end_dateのUNIX_TIMESTAMPを取得
          select unix_timestamp($post_end_date) INTO $unix_time_post_end_date;
          -- updated_dateのUNIX_TIMESTAMPを取得
          select unix_timestamp($updated_date) INTO $unix_time_updated_date;

          -- INSERTする
          INSERT INTO article_content_search
          VALUES (
            $id,
            $code,
            $cp_id,
            $cp_name,
            $genre_id,
            $category_id,
            $genre_name,
            $sub_genre_id,
            $sub_genre_name,
            $hash_timestamp,
            $title,
            $short_title,
            $body,
            $article_type,
            $post_start_date,
            $unix_time_post_start_date,
            $post_end_date,
            $unix_time_post_end_date,
            $category_composition_date,
            $category_integration_time,
            $deleted_flag,
            $created_date,
            $updated_date,
            $unix_time_updated_date
          );
     END;
$$
DELIMITER ;

DROP PROCEDURE IF EXISTS update_article_search;

DELIMITER $$
CREATE PROCEDURE update_article_search(
  IN $id INT,
  IN $code VARCHAR(128),
  IN $cp_id INT,
  IN $genre_id INT,
  IN $sub_genre_id INT,
  IN $hash_timestamp VARCHAR(128),
  IN $title VARCHAR(255),
  IN $short_title VARCHAR(32),
  IN $body TEXT,
  IN $article_type TINYINT,
  IN $post_start_date DATETIME,
  IN $post_end_date DATETIME,
  IN $category_composition_date DATETIME,
  IN $category_integration_time INT,
  IN $deleted_flag TINYINT,
  IN $created_date DATETIME,
  IN $updated_date DATETIME

)
     main:BEGIN
          /**
           * 検索用テーブル更新
           */
          -- 変数定義
          DECLARE $cp_name VARCHAR(64); -- CP名
          DECLARE $genre_name VARCHAR(24); -- ジャンル名
          DECLARE $category_id INT; -- ジャンルカテゴリID
          DECLARE $sub_genre_name VARCHAR(24); -- サブジャンル名
          DECLARE $unix_time_post_start_date INT; -- 掲載開始日(UNIX_TIMESTAMP)
          DECLARE $unix_time_post_end_date INT; -- 掲載終了日(UNIX_TIMESTAMP)
          DECLARE $unix_time_updated_date INT; -- 更新日(UNIX_TIMESTAMP)

          -- CP情報を取得
          SELECT
             name INTO $cp_name
          FROM
            cp
          WHERE
            id = $cp_id
          ;

          -- ジャンル情報を取得
          SELECT
            name,
            category_id INTO $genre_name, $category_id
          FROM
            genre
          WHERE
            id = $genre_id
          ;

          -- サブジャンル情報を取得
          SELECT
             name INTO $sub_genre_name
          FROM
            sub_genre
          WHERE
            id = $sub_genre_id
          ;

          -- post_start_dateのUNIX_TIMESTAMPを取得
          select unix_timestamp($post_start_date) INTO $unix_time_post_start_date;
          -- post_end_dateのUNIX_TIMESTAMPを取得
          select unix_timestamp($post_end_date) INTO $unix_time_post_end_date;
          -- updated_dateのUNIX_TIMESTAMPを取得
          select unix_timestamp($updated_date) INTO $unix_time_updated_date;

          -- UPDATEする
          UPDATE article_content_search
          SET
            code = $code,
            cp_id = $cp_id,
            cp_name = $cp_name,
            genre_id = $genre_id,
            category_id = $category_id,
            genre_name = $genre_name,
            sub_genre_id = $sub_genre_id,
            sub_genre_name = $sub_genre_name,
            hash_timestamp = $hash_timestamp,
            title = $title,
            short_title = $short_title,
            body = $body,
            article_type = $article_type,
            post_start_date = $post_start_date,
            unix_time_post_start_date = $unix_time_post_start_date,
            post_end_date = $post_end_date,
            unix_time_post_end_date = $unix_time_post_end_date,
            category_composition_date = $category_composition_date,
            category_integration_time = $category_integration_time,
            deleted_flag = $deleted_flag,
            created_date = $created_date,
            updated_date = $updated_date,
            unix_time_updated_date = $unix_time_updated_date
          WHERE
            id = $id;

     END;
$$
DELIMITER ;

DROP PROCEDURE IF EXISTS delete_article_search;

DELIMITER $$
CREATE PROCEDURE delete_article_search(IN $id INT)
     main:BEGIN
          -- DELETEする
          DELETE FROM article_content_search
          WHERE
            id = $id;

     END;
$$
DELIMITER ;
