/**
 * AstroMasterEntity class file
 *
 * @package Entity
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import "reflect-metadata";
import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";
import { FortuneItemEntity } from "./FortuneItemEntity";
import { AbstractEntity } from "./AbstractEntity";

/**
 * AstroMasterEntity
 *
 * @author hoge(hoge@mediba.jp)
 */
@ObjectType("AstroMaster")
@Entity("astro_master")
export class AstroMasterEntity extends AbstractEntity {

    /**
     * @property number id
     */
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    readonly id?: number;
        
    /**
     * @property number code
     */
    @Column()
    code?: number;
        
    /**
     * @property string name
     */
    @Column()
    name?: string;
        
    /**
     * @property string name
     */
    @Column()
    deleted_flag?: number;
        
    /**
     * @property Date created_date
     */
    @CreateDateColumn()
    created_date?: Date;
        
    /**
     * @property Date updated_date
     */
    @UpdateDateColumn()
    updated_date?: Date;
        
    /**
     * @property FortuneItemEntity fortune_item
     */   
    @OneToOne(
        type => FortuneItemEntity, 
        fortune_item => fortune_item.astro_code,
        { cascadeRemove: true }
    )
    fortune_item?: FortuneItemEntity;
}
