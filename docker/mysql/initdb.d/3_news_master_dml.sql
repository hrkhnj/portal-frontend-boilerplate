#
# マスタ系のデータ投入用のDML定義ファイル
#
USE `portal` ;

# テーブルのダンプ category
# ------------------------------------------------------------
INSERT INTO `category` (`id`, `name`, `priority`, `deleted_flag`, `created_user_id`, `updated_user_id`)
VALUES
    (1,'主要',10,0,1,1),
    (2,'国内',9,0,1,1),
    (3,'経済・IT',8,0,1,1),
    (4,'国際',7,0,1,1),
    (5,'芸能',6,0,1,1),
    (6,'スポーツ',5,0,1,1),
    (7,'コネタ',4,0,1,1),
    (8,'ライフトピックス',3,1,1,1);


# テーブルのダンプ genre
# ------------------------------------------------------------
INSERT INTO `genre` (`id`, `category_id`, `name`, `priority`, `deleted_flag`, `created_user_id`, `updated_user_id`)
VALUES
    (1,7,'コネタ',5,0,1,1),
    (2,2,'国内',10,0,1,1),
    (3,3,'経済・IT',9,0,1,1),
    (4,4,'国際',8,0,1,1),
    (5,5,'芸能',7,0,1,1),
    (6,6,'スポーツ',6,0,1,1),
    (7,8,'ライフトピックス',4,1,1,1);

# テーブルのダンプ sub_genre
# ------------------------------------------------------------
INSERT INTO `sub_genre` (`id`, `genre_id`, `rss_genre_id`, `name`, `priority`, `deleted_flag`, `created_user_id`, `updated_user_id`)
VALUES
    (1,1,91,'コネタ',10,0,1,1),
    (2,2,101,'社会',10,0,1,1),
    (3,2,102,'政治',9,0,1,1),
    (4,2,103,'文化・科学',8,0,1,1),
    (5,2,104,'地域',7,0,1,1),
    (6,3,201,'経済',10,0,1,1),
    (7,3,202,'IT',9,0,1,1),
    (8,4,301,'国際',10,0,1,1),
    (9,5,401,'芸能',10,0,1,1),
    (10,6,501,'野球',10,0,1,1),
    (11,6,502,'サッカー',9,0,1,1),
    (12,6,503,'その他',8,0,1,1),
    (13,7,601,'ライフトピックス',10,1,1,1);

# テーブルのダンプ user
# ------------------------------------------------------------
INSERT INTO `user` (`id`, `username`, `password`, `mail_address`, `deleted_flag`, `created_user_id`, `updated_user_id`)
VALUES
    (1,'admin','$2y$13$kOb4nvvU.g4OlqeRQIG6Qu0MjYUctSridixPEcVmzhPHjPyMpsopG','DdFL43T5q36nFyatMaRHm25PSs7WrBX5CWWTTDeO6Dw=',0,1,1),
    (2,'batch','$2y$13$A9u0j3Dt64n0rZi/9/jYxe3YpEcFbU2UYmQ0nPyqioNsqTneEMtYK','DdFL43T5q36nFyatMaRHm25PSs7WrBX5CWWTTDeO6Dw=',0,1,1),
    (3,'org_admin','$2y$13$8VSEiDa4fWKDHhZskW1kaeXvtSufcZPBXgLW9eKWKRDPmEqXcJQsS','DdFL43T5q36nFyatMaRHm25PSs7WrBX5CWWTTDeO6Dw=',0,1,1);

# テーブルのダンプ auth_assignment
# ------------------------------------------------------------
INSERT INTO `auth_assignment` (`item_name`, `user_id`, `created_at`)
VALUES
    ('admin',1,1),
    ('article_admin',3,1);

# テーブルのダンプ auth_item
# ------------------------------------------------------------
INSERT INTO `auth_item` (`name`, `type`, `description`, `rule_name`, `data`, `created_at`, `updated_at`)
VALUES
    ('admin',2,'',NULL,NULL,1,1),
    ('ad_editor',2,'',NULL,NULL,1,1),
    ('article_admin',2,'',NULL,NULL,1,1),
    ('article_editor',2,'',NULL,NULL,1,1);

# テーブルのダンプ auth_item_child
# ------------------------------------------------------------
INSERT INTO `auth_item_child` (`parent`, `child`)
VALUES
    ('admin','ad_editor'),
    ('admin','article_admin'),
    ('article_admin','article_editor');

# テーブルのダンプ article_block
# ------------------------------------------------------------
INSERT INTO `article_block` (`id`, `name`, `code`, `label`)
VALUES
    (1,'本文ブロック','body', '本文'),
    (2,'画像ブロック','image', '画像'),
    (3,'見出しブロック','head', '見出し'),
    (4,'小見出しブロック','time', '小見出し'),
    (5,'サマリーブロック','summary', 'サマリー'),
    (6,'本文引用ブロック','quotation', '本文引用'),
    (7,'検索式関連リンク','search_formula', '検索式'),
    (8,'余白ブロック','partition', '余白'),
    (9,'編集部関連リンク【URL】','link_url', '編集部関連リンク【URL】'),
    (10,'編集部関連リンク【記事ID】','link_article_id', '編集部関連リンク【記事ID】'),
    (11,'編集部関連リンク【タグ埋め込み】','link_html', '編集部関連リンク【タグ埋め込み】');


# テーブルのダンプ cp
# ------------------------------------------------------------
INSERT INTO `cp` (`id`, `code`, `name`, `article_expire`, `rss_url`, `rss_type`, `interval`, `post_start_date`, `widget_use_flag`, `article_create_flag`, `image_name`, `deleted_flag`, `created_user_id`, `updated_user_id`)
VALUES
	(1,'med','mediba編集部',180,'',2,60,'2017-01-01 00:00:00',0,1,NULL,0,1,1),
	(2,'pos','NEWSポストセブン',30,'http://www3.asahi.com/rss/au/postseven/rss.xml',2,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(3,'ji1','時事通信社',6,'http://www3.asahi.com/rss/au/jiji/rss.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(4,'ji2','時事通信社',6,'http://www3.asahi.com/rss/au/jiji_sports/rss.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(5,'ji3','時事通信社',6,'http://www3.asahi.com/rss/au/jiji_social/rss.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(6,'ji4','時事通信社',6,'http://www3.asahi.com/rss/au/jiji_international/rss.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(7,'to5','東洋経済オンライン',60,'http://www3.asahi.com/rss/au/toyo/rss.xml',2,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(8,'spo','スポニチ',14,'http://www3.asahi.com/rss/au/sponichi/rss.xml',2,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(9,'sa1','産経新聞',14,'http://www3.asahi.com/rss/au/sankei/rssaffairs.xml',2,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(10,'sa2','産経新聞',14,'http://www3.asahi.com/rss/au/sankei/rsspolitics.xml',2,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(11,'sa3','産経新聞',14,'http://www3.asahi.com/rss/au/sankei/rsseconomy.xml',2,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(12,'sa4','産経新聞',14,'http://www3.asahi.com/rss/au/sankei/rssworld.xml',2,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(13,'sa5','産経新聞',14,'http://www3.asahi.com/rss/au/sankei/rsslife.xml',2,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(14,'sa6','産経新聞',14,'http://www3.asahi.com/rss/au/sankei/rsswest.xml',2,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(15,'sa7','産経新聞',14,'http://www3.asahi.com/rss/au/sankei/rsspremium.xml',2,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(16,'asa','朝日新聞',7,'http://www3.asahi.com/rss/au/asahi/rss.rdf',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(17,'dai','デイリースポーツ',7,'http://www3.asahi.com/rss/au/dailysports/rss.xml',2,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(18,'res','レスキューナウ',7,'http://www3.asahi.com/rss/au/rescue/rss.xml',2,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(19,'ben','弁護士ドットコム',60,'https://www.bengo4.com/api/topics/feed/aukoneta',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(20,'ori','ORICON NEWS',60,'http://news.oricon.co.jp/feed/au/news_web_portal_oriconnews.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(21,'sti','Sportiva',60,'https://sportiva.shueisha.co.jp/rss_au_v2.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(22,'wpb','週刊プレイボーイ',60,'http://wpb.shueisha.co.jp/information/feeds/au.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(23,'yak','野球太郎',60,'http://yakyutaro.jp/new_au.php',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(24,'sck','サッカーキング',60,'https://www.soccer-king.jp/rss/au2.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(25,'bbk','ベースボールキング',60,'https://baseballking.jp/rss/au2.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(26,'bkk','バスケットボールキング',60,'https://basketballking.jp/rss/au2.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(27,'all','All About(人気記事)',30,'http://s3-ap-northeast-1.amazonaws.com/feed.allabout.co.jp/xml/au/au_news.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(28,'int','インターネットコム',60,'https://internetcom.jp/web/xml/au_koneta2.rss',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(29,'log','logmi(ログミー)',30,'http://logmi.jp/feed/au-webportal.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(30,'cli','clicccar',60,'http://clicccar.com/feed/?type=au',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(31,'php','PHPビジネスオンライン衆知',60,'http://shuchi.php.co.jp/au/rss',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(32,'giz','GIZMODO',60,'http://www.gizmodo.jp/au_feed2.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(33,'lif','Lifehacker',60,'http://www.lifehacker.jp/au_feed2.xml',1,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(34,'rmi','roomie',60,'http://www.roomie.jp/_au/rss_au_index2.php',1,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(35,'okm','OKMusic',60,'http://okmusic.jp/news_api/au_koneta.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(36,'crk','クランクイン',60,'http://www-org.crank-in.net/rss/aunews/data.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(37,'myn','マイナビニュース',60,'http://pub.news.mynavi.jp/feeds/aunews2/index.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(38,'myw','マイナビウーマン',60,'http://woman.mynavi.jp/wp-content/uploads/xml/au.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(39,'mys','マイナビスチューデント',60,'http://student.mynavi.jp/xml/au.php',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(40,'eip','エイ出版',60,'https://www.ei-publishing.co.jp/?feed=aukoneta',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(41,'spa','日刊SPA！',30,'http://nikkan-spa.jp/new_au_smartpass_feed_xml',1,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(42,'asg','アサ芸プラス',60,'http://www.asagei.com/feed?site=au',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(43,'asj','アサジョ',60,'http://asajo.jp/feed?site=au',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(44,'gnw','ガジェット通信',60,'http://getnews.jp/feed/ext/auone',1,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(45,'bec','Beauty & Co. ',60,'http://www.beauty-co.jp/news/feed/rss_for_au_news.rss',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(46,'cam','camily',60,'http://deliver.camily.jp/feeds/au_koneta/rss2.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(47,'dom','Doctors Me',60,'https://doctors-me.com/rss/column_au_news.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(48,'gig','GIGAZINE',60,'http://gigazine.net/news/rss_atom_au_7awtgdxd/',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(49,'hmt','Hot Mama Town',60,'http://sakuramama.jp/feed?type=au',1,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(50,'bir','美レンジャー',60,'http://www.biranger.jp/feed?type=au',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(51,'ign','IGNITE',60,'http://ignite.jp/feed/?type=au',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(52,'itm','IT Mama',60,'http://itmama.jp/feed/?type=au',1,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(53,'wmy','Woman Money',60,'http://mmmedia.jp/feed?type=au',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(54,'lme','シェアしたくなる法律相談所',60,'http://lmedia.jp/feed?type=au',1,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(55,'moc','Mocosuku',60,'http://mocosuku.com/rss/suppliers/au/my_rss.php?t=1',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(56,'nap','nanapi',60,'http://nanapi.jp/distributions/feed/style:auone',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(57,'ozm','ozmall',60,'http://wss.ozmall.co.jp/newsfeed/20141217/WSOzForAu.svc/',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(58,'tst','T-SITE',60,'http://top.tsite.jp/rss?type=au',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(59,'ani','アニメイトタイムズ',60,'http://www.animate.tv/rss/rss_au_news.xml',1,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(60,'ixl','イクシル',60,'http://ixil.info/dist/auone',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(61,'pia','ウレぴあ総研',60,'http://ure.pia.co.jp/list/feed/rss4aukoneta',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(62,'ckp','クックパッド',30,'http://cookpad-news.jp/feeds/au.rss',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(63,'suu','SUUMOジャーナル',60,'http://r-feed.jp/sites/7/feed/12.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(64,'tab','TABROOM NEWS',60,'http://r-feed.jp/sites/3/feed/12.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(65,'jal','じゃらんnews',60,'http://r-feed.jp/sites/1/feed/12.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(66,'sap','受験サプリ',60,'http://r-feed.jp/sites/12/feed/12.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(67,'zex','セキララゼクシィ',60,'http://r-feed.jp/sites/8/feed/12.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(68,'zek','ゼクシイキッチン',60,'http://r-feed.jp/sites/11/feed/12.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(69,'mes','メシ通',60,'http://r-feed.jp/sites/5/feed/12.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(70,'nex','リクナビNEXT ジャーナル',60,'http://r-feed.jp/sites/16/feed/12.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(71,'shi','リクナビ進学 ジャーナル',60,'http://r-feed.jp/sites/13/feed/12.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(72,'aka','赤すぐnet みんなの体験記',60,'http://r-feed.jp/sites/6/feed/12.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(73,'car','日刊カーセンサー',60,'http://r-feed.jp/sites/10/feed/12.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(74,'tow','タウンワークマガジン',60,'http://r-feed.jp/sites/2/feed/12.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(75,'ddn','ダ・ヴィンチ電子ナビ',60,'http://news.ddnavi.com/au/data.xml',1,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(76,'dwn','ドワンゴジェイピーnews',60,'http://news.dwango.jp/feed/?source=au',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(77,'thu','日刊大衆',60,'http://taishu.jp/rss/rss_au.php',1,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(78,'ski','スキンケア大学',60,'http://www.skincare-univ.com/rss/feed/au_smartpass.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(79,'hea','ヘルスケア大学',60,'http://www.skincare-univ.com/rss/feed/au_smartpass_healthcare.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(80,'men','メンズスキンケア大学',60,'http://www.skincare-univ.com/rss/feed/au_smartpass_mens.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(81,'mdp','モデルプレス',30,'http://feed.mdpr.jp/rss/export/au-one.rss',1,60,'2017-01-01 00:00:00',0,0,NULL,0,1,1),
	(82,'enj','レッツエンジョイ東京 おでかけスタイル',60,'http://www.enjoytokyo.jp/rss/report/lets_rss_report_005_005.xml',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(83,'vip','日本タレント名鑑',60,'http://www.vip-times.co.jp/?feed=cpif',1,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(84,'tpg','THE PAGE(フル）',60,'https://thepage.jp/partner/auPortal/list.rss',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(85,'jbp','Jbpress',60,'http://jbpress.ismedia.jp/list/feed/rss4au',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(86,'te1','tenki.jp',60,'http://az416740.vo.msecnd.net/component/static_api/rss/forecaster_diary/recent_entries_au.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(87,'te2','tenki.jp サプリ',60,'http://tenkijp.blob.core.windows.net/component/static_api/rss/suppl/recent_entries_au.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(88,'nla','ねとらぼ',60,'http://cgi.itmedia.co.jp/au_portal_feed/nl.xml',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(89,'joi','中央日報',7,'http://japanese.joins.com/etc/article_list_au.php',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(90,'tra','乗りものニュース',60,'https://trafficnews.jp/auwebportal-feed/',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(91,'oto','オトナンサー',60,'https://otonanswer.jp/auwebportal-feed/',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(92,'fcj','Full-Count',60,'https://full-count.jp/auwebportal-feed/',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(93,'fzw','Football ZONE web',60,'http://www.football-zone.net/au',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(94,'fbc','フットボールチャンネル',60,'https://www.footballchannel.jp/auwebportal-feed/',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(95,'bbc','ベースボールチャンネル',60,'https://www.baseballchannel.jp/auwebportal-feed/',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(96,'nbn','高校野球ドットコム',60,'http://www.hb-nippon.com/rss/auone/',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(97,'wct','WEB CARTOP',60,'https://www.webcartop.jp/?feed=au&_mmm=23789cfbf97dd8d1a9ef12461315d577',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(98,'bun','文春オンライン',60,'http://bunshun.jp/list/feed/rss4au',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1),
	(99,'jis','女性自身',60,'http://tstcf.jisin.jp/rss/au',2,60,'2017-01-01 00:00:00',1,0,NULL,0,1,1);

# CPとジャンルを紐付ける cp_genre_middle
# ----------------------------------------------------------
INSERT INTO cp_genre_middle (cp_id, genre_id)
SELECT cp.id as cp_id, g.id as genre_id FROM cp INNER JOIN genre g ORDER BY cp_id , genre_id;


# テーブルのダンプ search_formula
# ----------------------------------------------------------
INSERT INTO `search_formula` (`id`, `name`, `label`, `category`, `number`, `formula`, `deleted_flag`, `created_user_id`, `updated_user_id`)
VALUES
	(1,'プロ野球','プロ野球',1,0,'sub_genre_id:10',0,1,1),
	(2,'海外サッカー','海外サッカー',1,0,'sub_genre_id:10',0,1,1),
	(3,'トランプ大統領','トランプ大統領',1,0,'sub_genre_id:10',0,1,1),
	(4,'熱愛・交際報道','熱愛・交際報道',1,0,'sub_genre_id:10',0,1,1),
	(5,'皇室','皇室',1,0,'sub_genre_id:10',0,1,1),
	(6,'小池都政','小池都政',1,0,'sub_genre_id:10',0,1,1),
	(7,'株価・為替','株価・為替',1,0,'sub_genre_id:10',0,1,1),
	(8,'マネー','マネー',1,0,'sub_genre_id:10',0,1,1),
	(9,'朝鮮半島情勢','朝鮮半島情勢',1,0,'sub_genre_id:10',0,1,1),
	(10,'大相撲','大相撲',1,0,'sub_genre_id:10',0,1,1),
	(11,'広島','広島',1,0,'sub_genre_id:10',0,1,1),
	(12,'巨人','巨人',1,0,'sub_genre_id:10',0,1,1),
	(13,'DeNA','DeNA',1,0,'sub_genre_id:10',0,1,1),
	(14,'阪神','阪神',1,0,'sub_genre_id:10',0,1,1),
	(15,'ヤクルト','ヤクルト',1,0,'sub_genre_id:10',0,1,1),
	(16,'中日','中日',1,0,'sub_genre_id:10',0,1,1),
	(17,'日本ハム','日本ハム',1,0,'sub_genre_id:10',0,1,1),
	(18,'ソフトバンク','ソフトバンク',1,0,'sub_genre_id:10',0,1,1),
	(19,'ロッテ','ロッテ',1,0,'sub_genre_id:10',0,1,1),
	(20,'西武','西武',1,0,'sub_genre_id:10',0,1,1),
	(21,'楽天','楽天',1,0,'sub_genre_id:10',0,1,1),
	(22,'オリックス','オリックス',1,0,'sub_genre_id:10',0,1,1),
	(23,'大谷翔平','大谷翔平',1,0,'sub_genre_id:10',0,1,1),
	(24,'侍ジャパン','侍ジャパン',1,0,'sub_genre_id:10',0,1,1),
	(25,'高校野球','高校野球',1,0,'sub_genre_id:10',0,1,1),
	(26,'清宮幸太郎','清宮幸太郎',1,0,'sub_genre_id:10',0,1,1),
	(27,'イチロー','イチロー',1,0,'sub_genre_id:10',0,1,1),
	(28,'MLB','MLB',1,0,'sub_genre_id:10',0,1,1),
	(29,'サッカー日本代表','サッカー日本代表',1,0,'sub_genre_id:10',0,1,1),
	(30,'海外サッカーの日本人選手','海外サッカーの日本人選手',1,0,'sub_genre_id:10',0,1,1),
	(31,'J1','J1',1,0,'sub_genre_id:10',0,1,1),
	(32,'鹿島アントラーズ','鹿島アントラーズ',1,0,'sub_genre_id:10',0,1,1),
	(33,'浦和レッズ','浦和レッズ',1,0,'sub_genre_id:10',0,1,1),
	(34,'川崎フロンターレ','川崎フロンターレ',1,0,'sub_genre_id:10',0,1,1),
	(35,'ガンバ大阪','ガンバ大阪',1,0,'sub_genre_id:10',0,1,1),
	(36,'大宮アルディージャ','大宮アルディージャ',1,0,'sub_genre_id:10',0,1,1),
	(37,'サンフレッチェ広島','サンフレッチェ広島',1,0,'sub_genre_id:10',0,1,1),
	(38,'ヴィッセル神戸','ヴィッセル神戸',1,0,'sub_genre_id:10',0,1,1),
	(39,'柏レイソル','柏レイソル',1,0,'sub_genre_id:10',0,1,1),
	(40,'FC東京','FC東京',1,0,'sub_genre_id:10',0,1,1),
	(41,'横浜F・マリノス','横浜F・マリノス',1,0,'sub_genre_id:10',0,1,1),
	(42,'サガン鳥栖','サガン鳥栖',1,0,'sub_genre_id:10',0,1,1),
	(43,'ベガルタ仙台','ベガルタ仙台',1,0,'sub_genre_id:10',0,1,1),
	(44,'ジュビロ磐田','ジュビロ磐田',1,0,'sub_genre_id:10',0,1,1),
	(45,'ヴァンフォーレ甲府','ヴァンフォーレ甲府',1,0,'sub_genre_id:10',0,1,1),
	(46,'アルビレックス新潟','アルビレックス新潟',1,0,'sub_genre_id:10',0,1,1),
	(47,'北海道コンサドーレ札幌','北海道コンサドーレ札幌',1,0,'sub_genre_id:10',0,1,1),
	(48,'清水エスパルス','清水エスパルス',1,0,'sub_genre_id:10',0,1,1),
	(49,'セレッソ大阪','セレッソ大阪',1,0,'sub_genre_id:10',0,1,1),
	(50,'テニス','テニス',1,0,'sub_genre_id:10',0,1,1),
	(51,'錦織圭','錦織圭',1,0,'sub_genre_id:10',0,1,1),
	(52,'稀勢の里','稀勢の里',1,0,'sub_genre_id:10',0,1,1),
	(53,'羽生結弦','羽生結弦',1,0,'sub_genre_id:10',0,1,1),
	(54,'浅田真央','浅田真央',1,0,'sub_genre_id:10',0,1,1),
	(55,'iPhone','iPhone',1,0,'sub_genre_id:10',0,1,1),
	(56,'格安スマホ','格安スマホ',1,0,'sub_genre_id:10',0,1,1),
	(57,'連ドラ','連ドラ',1,0,'sub_genre_id:10',0,1,1),
	(58,'嵐','嵐',1,0,'sub_genre_id:10',0,1,1),
	(59,'元SMAP','元SMAP',1,0,'sub_genre_id:10',0,1,1),
	(60,'大河ドラマ','大河ドラマ',1,0,'sub_genre_id:10',0,1,1),
	(61,'朝ドラ','朝ドラ',1,0,'sub_genre_id:10',0,1,1),
	(62,'ジャニーズ','ジャニーズ',1,0,'sub_genre_id:10',0,1,1),
	(63,'AKB48','AKB48',1,0,'sub_genre_id:10',0,1,1),
	(64,'モーニング娘。','モーニング娘。',1,0,'sub_genre_id:10',0,1,1),
	(65,'結婚・離婚報道','結婚・離婚報道',1,0,'sub_genre_id:10',0,1,1),
	(66,'不倫報道','不倫報道',1,0,'sub_genre_id:10',0,1,1),
	(67,'北方領土問題','北方領土問題',1,0,'sub_genre_id:10',0,1,1),
	(68,'韓国の国政介入疑惑','韓国の国政介入疑惑',1,0,'sub_genre_id:10',0,1,1),
	(69,'イスラム国（IS）','イスラム国（IS）',1,0,'sub_genre_id:10',0,1,1),
	(70,'中国共産党','中国共産党',1,0,'sub_genre_id:10',0,1,1),
	(71,'英国のEU離脱問題','英国のEU離脱問題',1,0,'sub_genre_id:10',0,1,1),
	(72,'安倍政権','安倍政権',1,0,'sub_genre_id:10',0,1,1),
	(73,'辺野古移設','辺野古移設',1,0,'sub_genre_id:10',0,1,1),
	(74,'テロ等準備罪（共謀罪）','テロ等準備罪（共謀罪）',1,0,'sub_genre_id:10',0,1,1),
	(75,'東京五輪','東京五輪',1,0,'sub_genre_id:10',0,1,1),
	(76,'働き方改革','働き方改革',1,0,'sub_genre_id:10',0,1,1),
	(77,'ディズニー','ディズニー',1,0,'sub_genre_id:10',0,1,1),
	(78,'USJ','USJ',1,0,'sub_genre_id:10',0,1,1),
	(79,'豊洲市場','豊洲市場',1,0,'sub_genre_id:10',0,1,1),
	(80,'天皇退位','天皇退位',1,0,'sub_genre_id:10',0,1,1),
	(81,'企業決算','企業決算',1,0,'sub_genre_id:10',0,1,1);

  # テーブルのダンプ auto_censor_word
  # ----------------------------------------------------------
  INSERT INTO auto_censor_word(sub_genre_id,keyword,deleted_flag,created_user_id, updated_user_id)
  SELECT id ,'オルガズム
  クリトリス
  スパンキング
  バイブ
  一人エッチ
  ローター
  愛撫
  前戯
  体位' AS keyword, 0,1,1 FROM sub_genre;

# テーブルのダンプ service
# ----------------------------------------------------------
INSERT INTO `service` (`name`, `deleted_flag`)
VALUES
	('au Webポータル',0),
	('UQ',0);

# テーブルのダンプ information
# ----------------------------------------------------------
INSERT INTO `information` (`name`, `limit`, `deleted_flag`)
VALUES
	('お知らせ枠',10,0),
	('緊急お知らせ枠',10,0),
	('編成枠',10,0),
	('訴求枠',2,0);

# テーブルのダンプ astro_master
# ----------------------------------------------------------
INSERT INTO `astro_master` (`code`, `name`, `deleted_flag`)
VALUES
	(1,'おひつじ座',0),
	(2,'おうし座',0),
	(3,'ふたご座',0),
	(4,'かに座',0),
	(5,'しし座',0),
	(6,'おとめ座',0),
	(7,'てんびん座',0),
	(8,'さそり座',0),
	(9,'いて座',0),
	(10,'やぎ座',0),
	(11,'みずがめ座',0),
	(12,'うお座',0);
