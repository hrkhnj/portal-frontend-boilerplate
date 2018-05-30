import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {Service} from "./Service";
import {Information} from "./Information";


@Entity("information_item")
@Index("fk_information_item_service1_idx",["service_id",])
@Index("fk_information_item_information1_idx",["information_id",])
export class InformationItem {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

   
    @ManyToOne(type=>Service, service_id=>service_id.information_items,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'service_id'})
    service_id:Service;
    

   
    @ManyToOne(type=>Information, information_id=>information_id.information_items,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'information_id'})
    information_id:Information;
    

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
        

    @Column("tinyint",{ 
        nullable:false,
        default:"0",
        name:"pc_flag"
        })
    pc_flag:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"body"
        })
    body:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:128,
        name:"caption"
        })
    caption:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"url"
        })
    url:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:255,
        name:"image"
        })
    image:string;
        

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
        
    constructor(init?: Partial<InformationItem>) {
		Object.assign(this, init);
	}
}
