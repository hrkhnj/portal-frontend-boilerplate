import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";


@Entity("cache")
export class Cache {

    @Column("char",{ 
        nullable:false,
        length:128,
        primary:true,
        name:"id"
        })
    id:string;
        

    @Column("int",{ 
        nullable:true,
        name:"expire"
        })
    expire:number;
        

    @Column("mediumblob",{ 
        nullable:true,
        name:"data"
        })
    data:Buffer;
        
    constructor(init?: Partial<Cache>) {
		Object.assign(this, init);
	}
}
