/**
 * ArticleBlockEntity class file
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import {Entity, Column, OneToMany} from "typeorm";
import {ArticleFeatureBlockEntity} from "./ArticleFeatureBlockEntity";

/**
 * ArticleBlockEntity
 *
 * @author hoge(hoge@mediba.jp)
 */
@Entity("article_block")
export class ArticleBlockEntity {

    /**
     * @property number id サロゲートキー
     */
    @Column("int", { 
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id?: number;
        
    /**
     * @property string name 名称
     */
    @Column("varchar", { 
        nullable: false,
        length: 48,
        name: "name"
    })
    name?: string;
        
    /**
     * @property string code コード
     */
    @Column("varchar", { 
        nullable: false,
        length: 16,
        name: "code"
    })
    code?: string;
        
    /**
     * @property string label ラベル
     */
    @Column("varchar",{ 
        nullable: false,
        length: 48,
        name: "label"
    })
    label?: string;
        
    /**
     * @property ArticleFeatureBlockEntity[] article_feature_blocks article_feature_blocks
     */
    @OneToMany(
        type => ArticleFeatureBlockEntity, 
        article_feature_blocks => article_feature_blocks.block_id,
        { 
            cascadeInsert: true,
            cascadeUpdate: true
        }
    )
    article_feature_blocks?: ArticleFeatureBlockEntity[];

    /**
     * constructor
     * 
     * @param init 
     */
    constructor(init?: Partial<ArticleBlockEntity>) {
		Object.assign(this, init);
	}
}
