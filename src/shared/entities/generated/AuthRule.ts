import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";


@Entity("auth_rule")
export class AuthRule {

    @Column("varchar",{ 
        nullable:false,
        length:64,
        primary:true,
        name:"name"
        })
    name:string;
        

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
        
    constructor(init?: Partial<AuthRule>) {
		Object.assign(this, init);
	}
}
