/**
 * AdTabEntity class file
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import {Entity, Column} from "typeorm";

/**
 * AdTabEntity
 *
 * @author hoge(hoge@mediba.jp)
 */
@Entity("ad_tab")
export class AdTabEntity {

    /**
     * @property number id サロゲートキー
     */
    @Column("int", { 
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id?: number;
        
    /**
     * @property string campaign_name キャンペーン名
     */
    @Column("varchar", { 
        nullable: false,
        length: 48,
        name: "campaign_name"
    })
    campaign_name?: string;
        
    /**
     * @property string tab_name タブ名
     */
    @Column("varchar", { 
        nullable: false,
        length: 48,
        name: "tab_name"
    })
    tab_name?: string;
        
    /**
     * @property Date post_start_date 公開開始日
     */
    @Column("datetime", { 
        nullable: false,
        name: "post_start_date"
    })
    post_start_date?: Date;
        
    /**
     * @property Date post_end_date 公開終了日
     */
    @Column("datetime", { 
        nullable: false,
        name: "post_end_date"
    })
    post_end_date?: Date;
        
    /**
     * @property string color_code 色
     */
    @Column("varchar", { 
        nullable: true,
        length: 16,
        name: "color_code"
    })
    color_code?: string;
        
    /**
     * @property number deleted_flag 削除フラグ
     */
    @Column("tinyint", { 
        nullable: false,
        default: "0",
        name: "deleted_flag"
    })
    deleted_flag?: number;
        
    /**
     * @property number created_user_id 作成者ID
     */
    @Column("int", { 
        nullable: false,
        name: "created_user_id"
    })
    created_user_id?: number;
        
    /**
     * @property number updated_user_id 更新者ID
     */
    @Column("int", { 
        nullable: false,
        name: "updated_user_id"
    })
    updated_user_id?: number;
        
    /**
     * @property Date created_date 作成日
     */
    @Column("datetime", { 
        nullable: false,
        default: "CURRENT_TIMESTAMP",
        name: "created_date"
    })
    created_date?: Date;
        
    /**
     * @property Date updated_date 更新日
     */
    @Column("datetime", { 
        nullable: false,
        default: "CURRENT_TIMESTAMP",
        name: "updated_date"
    })
    updated_date?: Date;
        
    /**
     * constructor
     */
    constructor(init?: Partial<AdTabEntity>) {
		Object.assign(this, init);
	}
}
