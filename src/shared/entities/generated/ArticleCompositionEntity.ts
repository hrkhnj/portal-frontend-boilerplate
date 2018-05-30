/**
 * ArticleCompositionEntity class file
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import {Index, Entity, Column, OneToOne, JoinColumn} from "typeorm";
import {ArticleContentEntity} from "./ArticleContentEntity";
import {CategoryEntity} from "./CategoryEntity";

/**
 * ArticleCompositionEntity
 *
 * @author hoge(hoge@mediba.jp)
 */
@Entity("article_composition")
@Index("fk_article_composition_uq",["category_id","article_content_id",], {unique: true})
@Index("fk_main_composition_article_content_idx",["article_content_id",])
@Index("fk_article_composition_category1_idx",["category_id",])
export class ArticleCompositionEntity {

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
     * @property ArticleContentEntity article_content_id article_content_id
     */
    @OneToOne(
        type => ArticleContentEntity, 
        article_content_id => article_content_id.article_composition,
        {  
            nullable: false,
            cascadeInsert: true,
            cascadeUpdate: true,
            cascadeRemove: true,
        }
    )
    @JoinColumn({ name: "article_content_id" })
    article_content_id?: ArticleContentEntity;
    
    /**
     * @property CategoryEntity category_id category_id
     */
    @OneToOne(
        type => CategoryEntity, 
        category_id => category_id.article_composition,
        {  
            nullable: false,
            cascadeAll: true
        }
    )
    @JoinColumn({ name: "category_id" })
    category_id?: CategoryEntity;
    
    /**
     * @property number mark_type マーク種別（NEWとか）
     */
    @Column("tinyint", { 
        nullable: false,
        default: "1",
        name: "mark_type"
    })
    mark_type?: number;
        
    /**
     * @property number image_size_type 画像種類
     */
    @Column("tinyint", { 
        nullable: false,
        default: "1",
        name: "image_size_type"
    })
    image_size_type?: number;
        
    /**
     * @property number priority 優先順位
     */
    @Column("tinyint", { 
        nullable: false,
        default: "0",
        name: "priority"
    })
    priority?: number;
        
    /**
     * @property number created_user_id 作成者ID
     */
    @Column("int", { 
        nullable: false,
        name: "created_user_id"
    })
    created_user_id?: number;
        
    /**
     * @property number updated_user_id 更新者ID
     */
    @Column("int", { 
        nullable: false,
        name: "updated_user_id"
    })
    updated_user_id?: number;
        
    /**
     * @property Date created_date 作成日
     */
    @Column("datetime", { 
        nullable: false,
        default: "CURRENT_TIMESTAMP",
        name: "created_date"
    })
    created_date?: Date;
        
    /**
     * @property Date updated_date 更新日
     */
    @Column("datetime", { 
        nullable: false,
        default: "CURRENT_TIMESTAMP",
        name: "updated_date"
    })
    updated_date?: Date;

    /**
     * constructor
     * 
     * @param init 
     */
    constructor(init?: Partial<ArticleCompositionEntity>) {
		Object.assign(this, init);
	}
}
