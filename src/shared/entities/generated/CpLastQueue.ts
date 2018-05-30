import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {Cp} from "./Cp";


@Entity("cp_last_queue")
export class CpLastQueue {

   
    @OneToOne(type=>Cp, cp_id=>cp_id.cp_last_queue,{ primary:true, nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'cp_id'})
    cp_id:Cp;
    

    @Column("datetime",{ 
        nullable:false,
        name:"last_queued_date"
        })
    last_queued_date:Date;
        
    constructor(init?: Partial<CpLastQueue>) {
		Object.assign(this, init);
	}
}
