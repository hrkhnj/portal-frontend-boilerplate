import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {ArticleContent} from "./ArticleContent";
import {CpLastQueue} from "./CpLastQueue";
import {Genre} from "./Genre";


@Entity("cp")
@Index("code_UNIQUE",["code",],{unique:true})
@Index("post_start_date_INDEX",["post_start_date","article_create_flag","deleted_flag",])
export class Cp {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:16,
        name:"code"
        })
    code:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:64,
        name:"name"
        })
    name:string;
        

    @Column("int",{ 
        nullable:false,
        default:"30",
        name:"article_expire"
        })
    article_expire:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"rss_url"
        })
    rss_url:string;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"2",
        name:"rss_type"
        })
    rss_type:number;
        

    @Column("int",{ 
        nullable:false,
        default:"60",
        name:"interval"
        })
    interval:number;
        

    @Column("datetime",{ 
        nullable:true,
        name:"post_start_date"
        })
    post_start_date:Date;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"widget_use_flag"
        })
    widget_use_flag:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"article_create_flag"
        })
    article_create_flag:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"image_name"
        })
    image_name:string;
        

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
        

   
    @OneToOne(type=>ArticleContent, article_content=>article_content.cp_id,{ onDelete: 'CASCADE' })
    article_content:ArticleContent;
    

   
    @OneToOne(type=>CpLastQueue, cp_last_queue=>cp_last_queue.cp_id,{ onDelete: 'CASCADE' })
    cp_last_queue:CpLastQueue;
    

   
    @ManyToMany(type=>Genre, genre=>genre.cp,{  nullable:false, })
    @JoinTable()
    genre:Genre[];
    
    constructor(init?: Partial<Cp>) {
		Object.assign(this, init);
	}
}
