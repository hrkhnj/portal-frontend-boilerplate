import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {UqSidemenu} from "./UqSidemenu";


@Entity("uq_sidemenu_item")
@Index("fk_uq_sidemenu_item_uq_sidemenu1_idx",["uq_sidemenu_id",])
export class UqSidemenuItem {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>UqSidemenu, uq_sidemenu_id=>uq_sidemenu_id.uq_sidemenu_items,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'uq_sidemenu_id'})
    uq_sidemenu_id:UqSidemenu;
    

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default:"0",
        name:"category_flag"
        })
    category_flag:boolean;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"body"
        })
    body:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"url"
        })
    url:string;
        

    @Column("tinyint",{ 
        nullable:false,
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
        
    constructor(init?: Partial<UqSidemenuItem>) {
		Object.assign(this, init);
	}
}
