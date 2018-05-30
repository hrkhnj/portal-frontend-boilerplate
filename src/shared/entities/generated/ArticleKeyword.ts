import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";


@Entity("article_keyword")
export class ArticleKeyword {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"article_content_id"
        })
    article_content_id:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"code"
        })
    code:string;
        

    @Column("int",{ 
        nullable:false,
        name:"cp_id"
        })
    cp_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:64,
        name:"cp_name"
        })
    cp_name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"genre_id"
        })
    genre_id:number;
        

    @Column("int",{ 
        nullable:false,
        name:"sub_genre_id"
        })
    sub_genre_id:number;
        

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"search_formula_id"
        })
    search_formula_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:48,
        name:"search_formula_name"
        })
    search_formula_name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:48,
        name:"search_formula_label"
        })
    search_formula_label:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"hash_timestamp"
        })
    hash_timestamp:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"title"
        })
    title:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:32,
        name:"short_title"
        })
    short_title:string;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"1",
        name:"article_type"
        })
    article_type:number;
        

    @Column("datetime",{ 
        nullable:false,
        name:"post_start_date"
        })
    post_start_date:Date;
        

    @Column("int",{ 
        nullable:false,
        name:"unix_time_post_start_date"
        })
    unix_time_post_start_date:number;
        

    @Column("datetime",{ 
        nullable:false,
        name:"post_end_date"
        })
    post_end_date:Date;
        

    @Column("int",{ 
        nullable:false,
        name:"unix_time_post_end_date"
        })
    unix_time_post_end_date:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"deleted_flag"
        })
    deleted_flag:number;
        

    @Column("datetime",{ 
        nullable:false,
        name:"created_date"
        })
    created_date:Date;
        

    @Column("datetime",{ 
        nullable:false,
        name:"updated_date"
        })
    updated_date:Date;
        

    @Column("int",{ 
        nullable:false,
        name:"unix_time_updated_date"
        })
    unix_time_updated_date:number;
        
    constructor(init?: Partial<ArticleKeyword>) {
		Object.assign(this, init);
	}
}
