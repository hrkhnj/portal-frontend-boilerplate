import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {FortuneItem} from "./FortuneItem";


@Entity("astro_master")
@Index("code_UNIQUE",["code",],{unique:true})
export class AstroMaster {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("tinyint",{ 
        nullable:false,
        unique: true,
        name:"code"
        })
    code:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:5,
        name:"name"
        })
    name:string;
        

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
        

   
    @OneToOne(type=>FortuneItem, fortune_item=>fortune_item.astro_code,{ onDelete: 'CASCADE' })
    fortune_item:FortuneItem;
    
    constructor(init?: Partial<AstroMaster>) {
		Object.assign(this, init);
	}
}
