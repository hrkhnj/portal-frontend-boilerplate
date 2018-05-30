import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {AstroMaster} from "./AstroMaster";


@Entity("fortune_item")
@Index("astro_code_target_date_UNIQUE",["astro_code","target_date",],{unique:true})
export class FortuneItem {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("date",{ 
        nullable:false,
        name:"target_date"
        })
    target_date:string;
        

   
    @OneToOne(type=>AstroMaster, astro_code=>astro_code.fortune_item,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'astro_code'})
    astro_code:AstroMaster;
    

    @Column("tinyint",{ 
        nullable:false,
        name:"rank"
        })
    rank:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:3,
        name:"total_luck_title"
        })
    total_luck_title:string;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"total_luck_num"
        })
    total_luck_num:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"total_luck_text"
        })
    total_luck_text:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:3,
        name:"love_luck_title"
        })
    love_luck_title:string;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"love_luck_num"
        })
    love_luck_num:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"love_luck_text"
        })
    love_luck_text:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:2,
        name:"money_luck_title"
        })
    money_luck_title:string;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"money_luck_num"
        })
    money_luck_num:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"money_luck_text"
        })
    money_luck_text:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"keyword"
        })
    keyword:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"luck_color"
        })
    luck_color:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"astro_name"
        })
    astro_name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"astro_english_name"
        })
    astro_english_name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:4,
        name:"birthday_from"
        })
    birthday_from:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:4,
        name:"birthday_to"
        })
    birthday_to:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"astro_today_link"
        })
    astro_today_link:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"astro_tomorrow_link"
        })
    astro_tomorrow_link:string;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"deleted_flag"
        })
    deleted_flag:number;
        

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
        
    constructor(init?: Partial<FortuneItem>) {
		Object.assign(this, init);
	}
}
