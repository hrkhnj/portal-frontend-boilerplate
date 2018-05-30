import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {SubGenre} from "./SubGenre";


@Entity("auto_censor_word")
@Index("sub_genre_id_UNIQUE",["sub_genre_id",],{unique:true})
export class AutoCensorWord {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @OneToOne(type=>SubGenre, sub_genre_id=>sub_genre_id.auto_censor_word,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'sub_genre_id'})
    sub_genre_id:SubGenre;
    

    @Column("text",{ 
        nullable:false,
        name:"keyword"
        })
    keyword:string;
        

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
        
    constructor(init?: Partial<AutoCensorWord>) {
		Object.assign(this, init);
	}
}
