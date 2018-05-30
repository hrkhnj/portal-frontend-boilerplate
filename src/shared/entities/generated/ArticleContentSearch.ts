import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";


@Entity("article_content_search")
@Index("search_post_start_date_INDEX",["unix_time_post_start_date","deleted_flag",])
@Index("search_code_INDEX",["code","unix_time_post_start_date","deleted_flag",])
@Index("search_genre_id_sub_genre_id_INDEX",["genre_id","sub_genre_id","unix_time_post_start_date","deleted_flag",])
@Index("search_cp_name_INDEX",["cp_name","unix_time_post_start_date","deleted_flag",])
@Index("search_category_INDEX",["category_id","short_title","unix_time_updated_date",])
@Index("search_genre_list_INDEX",["sub_genre_id","unix_time_post_start_date","unix_time_post_end_date","deleted_flag",])
@Index("search_unix_time_updated_INDEX",["unix_time_updated_date",])
export class ArticleContentSearch {

    @Column("bigint",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:string;
        

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
        name:"category_id"
        })
    category_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:24,
        name:"genre_name"
        })
    genre_name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"sub_genre_id"
        })
    sub_genre_id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:24,
        name:"sub_genre_name"
        })
    sub_genre_name:string;
        

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
        

    @Column("text",{ 
        nullable:true,
        name:"body"
        })
    body:string;
        

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
        

    @Column("datetime",{ 
        nullable:true,
        name:"category_composition_date"
        })
    category_composition_date:Date;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"category_integration_time"
        })
    category_integration_time:number;
        

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
        
    constructor(init?: Partial<ArticleContentSearch>) {
		Object.assign(this, init);
	}
}
