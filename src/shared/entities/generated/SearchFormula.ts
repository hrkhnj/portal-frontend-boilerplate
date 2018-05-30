import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable} from "typeorm";


@Entity("search_formula")
export class SearchFormula {

    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:48,
        name:"name"
        })
    name:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:48,
        name:"label"
        })
    label:string;
        

    @Column("tinyint",{ 
        nullable:false,
        name:"category"
        })
    category:number;
        

    @Column("int",{ 
        nullable:false,
        default:"0",
        name:"number"
        })
    number:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:255,
        name:"formula"
        })
    formula:string;
        

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
        
    constructor(init?: Partial<SearchFormula>) {
		Object.assign(this, init);
	}
}
