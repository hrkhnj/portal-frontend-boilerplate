/**
 * ArticleContentSearchEntity class file
 *
 * @package Entity
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import "reflect-metadata";
import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

/**
 * ArticleContentSearchEntity
 *
 * @author hoge(hoge@mediba.jp)
 */
@ObjectType("ArticleContent")
@Entity("article_content_search")
export class ArticleContentSearchEntity extends AbstractEntity {

    /**
     * @property number id
     */
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    readonly id?: number;
        
    /**
     * @property string code
     */
    @Field()
    @Column()
    code?: string;
        
    /**
     * @property number cp_id
     */
    @Field()
    @Column()
    cp_id?: number;

    /**
     * @property string cp_name
     */
    @Field()
    @Column()
    cp_name?: string;
        
    /**
     * @property number genre_id
     */
    @Field()
    @Column()
    genre_id?: number;
        
    /**
     * @property number category_id
     */
    @Field()
    @Column()
    category_id?: number;
        
    /**
     * @property string genre_name
     */
    @Field()
    @Column()
    genre_name?: string;
        
    /**
     * @property number sub_genre_id
     */
    @Field()
    @Column()
    sub_genre_id?: number;
        
    /**
     * @property string sub_genre_name
     */
    @Field()
    @Column()
    sub_genre_name?: string;
        
    /**
     * @property string hash_timestamp
     */
    @Field()
    @Column()
    hash_timestamp?: string;
        
    /**
     * @property string title
     */
    @Field()
    @Column()
    title?: string;
        
    /**
     * @property string short_title
     */
    @Field()
    @Column()
    short_title?: string;
        
    /**
     * @property string body
     */
    @Field()
    @Column()
    body?: string;
        
    /**
     * @property number article_type
     */
    @Field()
    @Column()
    article_type?: number;
        
    /**
     * @property Date post_start_date
     */
    @Field()
    @Column()
    post_start_date?: Date;
        
    /**
     * @property number unix_time_post_start_date
     */
    @Column()
    unix_time_post_start_date?: number;

    /**
     * @property Date post_end_date
     */
    @Field()
    @Column()
    post_end_date?: Date;        

    /**
     * @property number unix_time_post_end_date
     */
    @Column()
    unix_time_post_end_date?: number;
        
    /**
     * @property Date category_composition_date
     */
    @Column()
    category_composition_date?: Date;        

    /**
     * @property number category_integration_time
     */
    @Column()
    category_integration_time?: number;
        
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

    /**
     * @property number unix_time_updated_date
     */
    @Column()
    unix_time_updated_date?: number;
}
