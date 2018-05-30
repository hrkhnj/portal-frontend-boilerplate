import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {Genre} from "./Genre";
import {ArticleContent} from "./ArticleContent";
import {AutoCensorWord} from "./AutoCensorWord";


@Entity("sub_genre")
@Index("fk_sub_genre_genre",["genre_id",])
export class SubGenre {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>Genre, genre_id=>genre_id.sub_genres,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'genre_id'})
    genre_id:Genre;
    

    @Column("int",{ 
        nullable:false,
        name:"rss_genre_id"
        })
    rss_genre_id:number;
        

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
        

   
    @OneToMany(type=>ArticleContent, article_contents=>article_contents.sub_genre_id,{ onDelete: 'CASCADE' })
    article_contents:ArticleContent[];
    

   
    @OneToOne(type=>AutoCensorWord, auto_censor_word=>auto_censor_word.sub_genre_id,{ onDelete: 'CASCADE' })
    auto_censor_word:AutoCensorWord;
    
    constructor(init?: Partial<SubGenre>) {
		Object.assign(this, init);
	}
}
