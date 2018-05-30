import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {ArticleContent} from "./ArticleContent";


@Entity("main_candidate")
@Index("fk_main_category_candidate_article_article_content_idx",["article_content_id",])
export class MainCandidate {

    @Column("bigint",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:string;
        

   
    @ManyToOne(type=>ArticleContent, article_content_id=>article_content_id.main_candidates,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'article_content_id'})
    article_content_id:ArticleContent;
    

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
        
    constructor(init?: Partial<MainCandidate>) {
		Object.assign(this, init);
	}
}
