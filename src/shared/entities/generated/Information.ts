import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {InformationItem} from "./InformationItem";


@Entity("information")
export class Information {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:24,
        name:"name"
        })
    name:string;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"1",
        name:"limit"
        })
    limit:number;
        

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
        

   
    @OneToMany(type=>InformationItem, information_items=>information_items.information_id,{ onDelete: 'CASCADE' })
    information_items:InformationItem[];
    
    constructor(init?: Partial<Information>) {
		Object.assign(this, init);
	}
}
