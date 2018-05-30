import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {AuthAssignment} from "./AuthAssignment";


@Entity("user")
export class User {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:64,
        name:"username"
        })
    username:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"password"
        })
    password:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:128,
        name:"mail_address"
        })
    mail_address:string;
        

    @Column("tinyint",{ 
        nullable:false,
        width:1,
        default:"0",
        name:"deleted_flag"
        })
    deleted_flag:boolean;
        

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
        

   
    @OneToOne(type=>AuthAssignment, auth_assignment=>auth_assignment.user_id,{ onDelete: 'CASCADE' })
    auth_assignment:AuthAssignment;
    
    constructor(init?: Partial<User>) {
		Object.assign(this, init);
	}
}
