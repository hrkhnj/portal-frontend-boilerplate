/**
 * ArticleSchema class file
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import { Field, ObjectType } from "type-graphql";

/**
 * ArticleSchema
 *
 * @author hoge(hoge@mediba.jp)
 */
@ObjectType({ description: "記事系" })
export class ArticleSchema {

    /**
     * @property string id id
     */
    @Field()
    id?: string;

    /**
     * @property string code コード
     */
    @Field()
    code?: string;

    /**
     * @property number genre_id ジャンルID
     */
//    @Field(type => Int)
//    genre_id?: number;

    /**
     * @property number sub_genre_id サブジャンルID
     */
//    @Field(type => Int)
//    sub_genre_id?: number;

    /**
     * @property string title タイトル
     */
    @Field()
    title?: string;

    /**
     * @property string short_title 省略見出し
     */
//    @Field({ nullable: true })
//    short_title?: string;

    /**
     * @property string url url
     */
//    @Field()
//    url?: string;

    /**
     * @property string s_thumbnail サムネ（小）
     */
//    @Field()
//    s_thumbnail?: string;

    /**
     * @property string s_thumbnail サムネ（小）
     */
//    @Field()
//    s_filler?: string;

    /**
     * @property string m_thumbnail サムネ（中）
     */
//    @Field()
//    m_thumbnail?: string;

    /**
     * @property string m_thumbnail サムネ（中）
     */
//    @Field()
//    m_filler?: string;
}
