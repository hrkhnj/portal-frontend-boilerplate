import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";


@Entity("auth_item_child")
export class AuthItemChild {

    @Column("varchar",{ 
        nullable:false,
        length:64,
        primary:true,
        name:"parent"
        })
    parent:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:64,
        primary:true,
        name:"child"
        })
    child:string;
        
    constructor(init?: Partial<AuthItemChild>) {
		Object.assign(this, init);
	}
}
