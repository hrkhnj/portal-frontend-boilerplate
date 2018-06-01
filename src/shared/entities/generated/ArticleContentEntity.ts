/**
 * ArticleContentEntity class file
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import {Index, Entity, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {CpEntity} from "./CpEntity";
import {GenreEntity} from "./GenreEntity";
import {SubGenreEntity} from "./SubGenreEntity";
import {ArticleCompositionEntity} from "./ArticleCompositionEntity";
import {ArticleFeatureBlockEntity} from "./ArticleFeatureBlockEntity";
import {MainCandidateEntity} from "./MainCandidateEntity";


/**
 * ArticleContentEntity
 *
 * @author hoge(hoge@mediba.jp)
 */
@Entity("article_content")
@Index("code_UNIQUE",["code",], {unique: true})
@Index("cp_id_uid_UNIQUE",["uid","cp_id",], {unique: true})
@Index("fk_news_cp_idx",["cp_id",])
@Index("fk_article_contents_genre_idx",["genre_id",])
@Index("fk_article_content_sub_genre1_idx",["sub_genre_id",])
export class ArticleContentEntity {

    /**
     * @property number id サロゲートキー
     */
    @Column("bigint", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    })
    id?: string;

    /**
     * @property string code コード
     */
    @Column("varchar", {
        nullable: false,
        unique: true,
        length: 128,
        name: "code"
    })
    code?: string;



    @OneToOne(
        type=>CpEntity, cp_id=>cp_id.article_content,
        {
            nullable:false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    )
    @JoinColumn({ name:'cp_id'})
    cp_id:Cp;


    @Column("int",{
        nullable:false,
        name:"cp_genre_id"
        })
    cp_genre_id:number;


    @Column("int",{
        nullable:false,
        name:"cp_sub_genre_id"
        })
    cp_sub_genre_id:number;



    @ManyToOne(type=>Genre, genre_id=>genre_id.article_contents,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'genre_id'})
    genre_id:Genre;



    @ManyToOne(type=>SubGenre, sub_genre_id=>sub_genre_id.article_contents,{  nullable:false,onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'sub_genre_id'})
    sub_genre_id:SubGenre;


    @Column("varchar",{
        nullable:true,
        length:255,
        name:"url"
        })
    url:string;


    @Column("varchar",{
        nullable:false,
        length:255,
        name:"uid"
        })
    uid:string;


    @Column("varchar",{
        nullable:true,
        length:128,
        name:"hash_timestamp"
        })
    hash_timestamp:string;


    @Column("varchar",{
        nullable:false,
        length:255,
        name:"title"
        })
    title:string;


    @Column("varchar",{
        nullable:true,
        length:32,
        name:"short_title"
        })
    short_title:string;


    @Column("text",{
        nullable:true,
        name:"body"
        })
    body:string;


    @Column("tinyint",{
        nullable:false,
        default:"1",
        name:"article_type"
        })
    article_type:number;


    @Column("datetime",{
        nullable:false,
        name:"post_start_date"
        })
    post_start_date:Date;


    @Column("datetime",{
        nullable:false,
        name:"post_end_date"
        })
    post_end_date:Date;


    @Column("datetime",{
        nullable:true,
        name:"modified_date"
        })
    modified_date:Date;


    @Column("datetime",{
        nullable:true,
        name:"first_composition_date_main"
        })
    first_composition_date_main:Date;


    @Column("datetime",{
        nullable:true,
        name:"first_composition_date_other"
        })
    first_composition_date_other:Date;


    @Column("datetime",{
        nullable:true,
        name:"category_composition_date"
        })
    category_composition_date:Date;


    @Column("int",{
        nullable:false,
        default:"0",
        name:"category_integration_time"
        })
    category_integration_time:number;


    @Column("varchar",{
        nullable:true,
        length:255,
        name:"relation_title_1"
        })
    relation_title_1:string;


    @Column("varchar",{
        nullable:true,
        length:255,
        name:"relation_url_1"
        })
    relation_url_1:string;


    @Column("varchar",{
        nullable:true,
        length:255,
        name:"relation_title_2"
        })
    relation_title_2:string;


    @Column("varchar",{
        nullable:true,
        length:255,
        name:"relation_url_2"
        })
    relation_url_2:string;


    @Column("varchar",{
        nullable:true,
        length:255,
        name:"relation_title_3"
        })
    relation_title_3:string;


    @Column("varchar",{
        nullable:true,
        length:255,
        name:"relation_url_3"
        })
    relation_url_3:string;


    @Column("varchar",{
        nullable:true,
        length:255,
        name:"relation_title_4"
        })
    relation_title_4:string;


    @Column("varchar",{
        nullable:true,
        length:255,
        name:"relation_url_4"
        })
    relation_url_4:string;


    @Column("varchar",{
        nullable:true,
        length:255,
        name:"relation_title_5"
        })
    relation_title_5:string;


    @Column("varchar",{
        nullable:true,
        length:255,
        name:"relation_url_5"
        })
    relation_url_5:string;


    @Column("tinyint",{
        nullable:false,
        default:"0",
        name:"deleted_flag"
        })
    deleted_flag:number;


    @Column("tinyint",{
        nullable:false,
        default:"0",
        name:"import_deleted_flag"
        })
    import_deleted_flag:number;


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



    @OneToOne(type=>ArticleComposition, article_composition=>article_composition.article_content_id,{ onDelete: 'CASCADE' })
    article_composition:ArticleComposition;



    @OneToMany(type=>ArticleFeatureBlock, article_feature_blocks=>article_feature_blocks.article_content_id,{ onDelete: 'CASCADE' })
    article_feature_blocks:ArticleFeatureBlock[];



    @OneToMany(type=>MainCandidate, main_candidates=>main_candidates.article_content_id,{ onDelete: 'CASCADE' })
    main_candidates:MainCandidate[];

    constructor(init?: Partial<ArticleContent>) {
		Object.assign(this, init);
	}
}
