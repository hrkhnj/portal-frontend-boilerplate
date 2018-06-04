/**
 * FortuneItemEntity class file
 *
 * @package Entity
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import "reflect-metadata";
import { Field, ID, ObjectType } from "type-graphql";
import { Max, Min, ValidationArguments } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from "typeorm";
import { AstroMasterEntity } from "./AstroMasterEntity";
import { AbstractEntity } from "./AbstractEntity";

/**
 * FortuneItemEntity
 *
 * @author hoge(hoge@mediba.jp)
 */
@ObjectType("FortuneItem")
@Entity("fortune_item")
export class FortuneItemEntity extends AbstractEntity {

    /**
     * @property number id
     */
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    readonly id?: number;
        
    /**
     * @property string target_date
     */
    @Field()
    @Column()
    target_date?: string;

    /**
     * @property AstroMasterEntity astro_code
     */
    @Min(1, { message: (args: ValidationArguments) => {
        return `星座コードは1 - 12で指定してください。[${args.value}]`;
    }})
    @Max(12, { message: (args: ValidationArguments) => {
        return `星座コードは1 - 12で指定してください。[${args.value}]`;
    }})
    @OneToOne(
        type => AstroMasterEntity,
        astro => astro.code
    )
    @JoinColumn({ name: "astro_code" })
    astro_code?: AstroMasterEntity;
    
    /**
     * @property number rank
     */
    @Column()
    rank?: number;
        
    /**
     * @property string total_luck_title
     */
    @Column()
    total_luck_title?: string;
        
    /**
     * @property number total_luck_num
     */
    @Column()
    total_luck_num?: number;
        
    /**
     * @property string total_luck_text
     */
    @Column()
    total_luck_text?: string;
        
    /**
     * @property string love_luck_title
     */
    @Column()
    love_luck_title?: string;
        
    /**
     * @property number love_luck_num
     */
    @Column()
    love_luck_num?: number;
        
    /**
     * @property number love_luck_num
     */
    @Column()
    love_luck_text?: string;
        
    /**
     * @property string money_luck_title
     */
    @Column()
    money_luck_title?: string;
        
    /**
     * @property number money_luck_num
     */
    @Column()
    money_luck_num?: number;
        
    /**
     * @property number money_luck_num
     */
    @Column()
    money_luck_text?: string;
        
    /**
     * @property string keyword
     */
    @Field()
    @Column()
    keyword?: string;
        
    /**
     * @property string luck_color
     */
    @Column()
    luck_color?: string;        

    /**
     * @property string astro_name
     */
    @Field()
    @Column()
    astro_name?: string;
        
    /**
     * @property string astro_english_name
     */
    @Column()
    astro_english_name?: string;
        
    /**
     * @property string birthday_from
     */
    @Column()
    birthday_from?: string;
        
    /**
     * @property string birthday_to
     */
    @Column()
    birthday_to?: string;
        
    /**
     * @property string astro_today_link
     */
    @Column()
    astro_today_link?: string;
        
    /**
     * @property string astro_today_link
     */
    @Column()
    astro_tomorrow_link?: string;
        
    /**
     * @property number deleted_flag
     */
    @Column()
    deleted_flag?: number;
        
    /**
     * @property Date created_date
     */
    @Field()
    @CreateDateColumn()
    created_date?: Date;
        
    /**
     * @property Date updated_date
     */
    @Field()
    @UpdateDateColumn()
    updated_date?: Date;
}
