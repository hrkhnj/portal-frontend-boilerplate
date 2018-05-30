import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {Category} from "./Category";
import {ArticleContent} from "./ArticleContent";
import {SubGenre} from "./SubGenre";
import {Cp} from "./Cp";


@Entity("genre")
@Index("fk_category_id",["category_id",])
export class Genre {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>Category, category_id=>category_id.genres,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'category_id'})
    category_id:Category;
    

    @Column("varchar",{ 
        nullable:false,
        length:24,
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
        

   
    @OneToMany(type=>ArticleContent, article_contents=>article_contents.genre_id,{ onDelete: 'CASCADE' })
    article_contents:ArticleContent[];
    

   
    @OneToMany(type=>SubGenre, sub_genres=>sub_genres.genre_id,{ onDelete: 'CASCADE' })
    sub_genres:SubGenre[];
    

   
    @ManyToMany(type=>Cp, cp=>cp.genre)
    cp:Cp[];
    
    constructor(init?: Partial<Genre>) {
		Object.assign(this, init);
	}
}
