import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {ArticleComposition} from "./ArticleComposition";
import {ArticleCompositionHistory} from "./ArticleCompositionHistory";
import {Genre} from "./Genre";


@Entity("category")
export class Category {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:16,
        name:"name"
        })
    name:string;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"priority"
        })
    priority:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"deleted_flag"
        })
    deleted_flag:number;
        

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
        

   
    @OneToOne(type=>ArticleComposition, article_composition=>article_composition.category_id,{ onDelete: 'CASCADE' })
    article_composition:ArticleComposition;
    

   
    @OneToMany(type=>ArticleCompositionHistory, article_composition_historys=>article_composition_historys.category_id,{ onDelete: 'CASCADE' })
    article_composition_historys:ArticleCompositionHistory[];
    

   
    @OneToMany(type=>Genre, genres=>genres.category_id,{ onDelete: 'CASCADE' })
    genres:Genre[];
    
    constructor(init?: Partial<Category>) {
		Object.assign(this, init);
	}
}
