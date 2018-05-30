import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import {User} from "./User";


@Entity("auth_assignment")
@Index("fk_auth_assignment_user1_idx",["user_id",])
export class AuthAssignment {

    @Column("varchar",{ 
        nullable:false,
        length:64,
        primary:true,
        name:"item_name"
        })
    item_name:string;
        

   
    @OneToOne(type=>User, user_id=>user_id.auth_assignment,{ primary:true, nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'user_id'})
    user_id:User;
    

    @Column("int",{ 
        nullable:true,
        name:"created_at"
        })
    created_at:number;
        
    constructor(init?: Partial<AuthAssignment>) {
		Object.assign(this, init);
	}
}
