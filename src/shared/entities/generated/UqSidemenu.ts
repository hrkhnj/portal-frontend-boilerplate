import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {UqSidemenuItem} from "./UqSidemenuItem";


@Entity("uq_sidemenu")
export class UqSidemenu {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"android_app_flag"
        })
    android_app_flag:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"android_sp_flag"
        })
    android_sp_flag:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"android_tab_flag"
        })
    android_tab_flag:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"ios_app_flag"
        })
    ios_app_flag:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"iphone_flag"
        })
    iphone_flag:number;
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"ipad_flag"
        })
    ipad_flag:number;
        

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
        

   
    @OneToMany(type=>UqSidemenuItem, uq_sidemenu_items=>uq_sidemenu_items.uq_sidemenu_id,{ onDelete: 'CASCADE' })
    uq_sidemenu_items:UqSidemenuItem[];
    
    constructor(init?: Partial<UqSidemenu>) {
		Object.assign(this, init);
	}
}
