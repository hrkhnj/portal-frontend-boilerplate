import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {ArticleContent} from "./ArticleContent";
import {ArticleBlock} from "./ArticleBlock";


@Entity("article_feature_block")
@Index("fk_article_feature_block_article_block_idx",["block_id",])
@Index("fk_article_feature_block_article_content_idx",["article_content_id",])
@Index("article_content_id_prioriy_INDEX",["article_content_id","priority",])
export class ArticleFeatureBlock {

    @Column("bigint",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:string;
        

   
    @ManyToOne(type=>ArticleContent, article_content_id=>article_content_id.article_feature_blocks,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'article_content_id'})
    article_content_id:ArticleContent;
    

   
    @ManyToOne(type=>ArticleBlock, block_id=>block_id.article_feature_blocks,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'block_id'})
    block_id:ArticleBlock;
    

    @Column("int",{ 
        nullable:true,
        name:"search_formula_id"
        })
    search_formula_id:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"relation_article_content_code"
        })
    relation_article_content_code:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"title"
        })
    title:string;
        

    @Column("text",{ 
        nullable:true,
        name:"body"
        })
    body:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"image_hash"
        })
    image_hash:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:64,
        name:"credit"
        })
    credit:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"url"
        })
    url:string;
        

    @Column("text",{ 
        nullable:true,
        name:"tag"
        })
    tag:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"caption"
        })
    caption:string;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"priority"
        })
    priority:number;
        
    constructor(init?: Partial<ArticleFeatureBlock>) {
		Object.assign(this, init);
	}
}
