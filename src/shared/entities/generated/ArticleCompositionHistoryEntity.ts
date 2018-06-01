/**
 * ArticleCompositionHistoryEntity class file
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import {Index, Entity, Column, ManyToOne, JoinColumn} from "typeorm";
import {CategoryEntity} from "./CategoryEntity";

/**
 * ArticleCompositionHistoryEntity
 *
 * @author hoge(hoge@mediba.jp)
 */
@Entity("article_composition_history")
@Index("fk_article_composition_history_category_idx",["category_id",])
@Index("cateogry_search_INDEX",["category_id","created_date",])
export class ArticleCompositionHistoryEntity {

    /**
     * @property number id サロゲートキー
     */
    @Column("bigint", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id?: string;

    /**
     * @property CategoryEntity category_id category_id
     */
    @ManyToOne(
        type => CategoryEntity,
        category_id => category_id.article_composition_historys,
        {
            nullable:false,
            cascadeAll: true
        }
    )
    @JoinColumn({ name: "category_id" })
    category_id?: CategoryEntity;

    /**
     * @property string article_content_id_1 article_content_id_1
     */
    @Column("bigint", {
        nullable: true,
        name: "article_content_id_1"
    })
    article_content_id_1?: string;


    @Column("varchar",{
        nullable:true,
        length:32,
        name:"short_title_1"
        })
    short_title_1?: string;


    @Column("bigint",{
        nullable:true,
        name:"article_content_id_2"
        })
    article_content_id_2:string;


    @Column("varchar",{
        nullable:true,
        length:32,
        name:"short_title_2"
        })
    short_title_2:string;


    @Column("bigint",{
        nullable:true,
        name:"article_content_id_3"
        })
    article_content_id_3:string;


    @Column("varchar",{
        nullable:true,
        length:32,
        name:"short_title_3"
        })
    short_title_3:string;


    @Column("bigint",{
        nullable:true,
        name:"article_content_id_4"
        })
    article_content_id_4:string;


    @Column("varchar",{
        nullable:true,
        length:32,
        name:"short_title_4"
        })
    short_title_4:string;


    @Column("bigint",{
        nullable:true,
        name:"article_content_id_5"
        })
    article_content_id_5:string;


    @Column("varchar",{
        nullable:true,
        length:32,
        name:"short_title_5"
        })
    short_title_5:string;


    @Column("bigint",{
        nullable:true,
        name:"article_content_id_6"
        })
    article_content_id_6:string;


    @Column("varchar",{
        nullable:true,
        length:32,
        name:"short_title_6"
        })
    short_title_6:string;


    @Column("bigint",{
        nullable:true,
        name:"article_content_id_7"
        })
    article_content_id_7:string;


    @Column("varchar",{
        nullable:true,
        length:32,
        name:"short_title_7"
        })
    short_title_7:string;


    @Column("bigint",{
        nullable:true,
        name:"article_content_id_8"
        })
    article_content_id_8:string;


    @Column("varchar",{
        nullable:true,
        length:32,
        name:"short_title_8"
        })
    short_title_8:string;


    @Column("bigint",{
        nullable:true,
        name:"article_content_id_9"
        })
    article_content_id_9:string;


    @Column("varchar",{
        nullable:true,
        length:32,
        name:"short_title_9"
        })
    short_title_9:string;


    @Column("bigint",{
        nullable:true,
        name:"article_content_id_10"
        })
    article_content_id_10:string;


    @Column("varchar",{
        nullable:true,
        length:32,
        name:"short_title_10"
        })
    short_title_10:string;


    @Column("int",{
        nullable:false,
        name:"created_user_id"
        })
    created_user_id:number;


    @Column("int",{
        nullable:false,
        name:"updated_user_id"
        })
    updated_user_id:number;


    @Column("datetime",{
        nullable:false,
        default:"CURRENT_TIMESTAMP",
        name:"created_date"
        })
    created_date:Date;


    @Column("datetime",{
        nullable:false,
        default:"CURRENT_TIMESTAMP",
        name:"updated_date"
        })
    updated_date:Date;

    constructor(init?: Partial<ArticleCompositionHistory>) {
		Object.assign(this, init);
	}
}
