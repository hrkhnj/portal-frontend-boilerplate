import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";


@Entity("auth_item")
export class AuthItem {

    @Column("varchar",{ 
        nullable:false,
        length:64,
        primary:true,
        name:"name"
        })
    name:string;
        

    @Column("int",{ 
        nullable:false,
        name:"type"
        })
    type:number;
        

    @Column("text",{ 
        nullable:true,
        name:"description"
        })
    description:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:64,
        name:"rule_name"
        })
    rule_name:string;
        

    @Column("text",{ 
        nullable:true,
        name:"data"
        })
    data:string;
        

    @Column("int",{ 
        nullable:true,
        name:"created_at"
        })
    created_at:number;
        

    @Column("int",{ 
        nullable:true,
        name:"updated_at"
        })
    updated_at:number;
        
    constructor(init?: Partial<AuthItem>) {
		Object.assign(this, init);
	}
}
