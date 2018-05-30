import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";


@Entity("uq_cache")
export class UqCache {

    @Column("char",{ 
        nullable:false,
        length:128,
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
        
    constructor(init?: Partial<UqCache>) {
		Object.assign(this, init);
	}
}
