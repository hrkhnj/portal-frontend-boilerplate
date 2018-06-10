/**
 * ArticleResolver class file
 *
 * @package Article
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import { Resolver, Query, Args } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { ArticleContentSearchEntity as Article } from "../../../shared/entities/ArticleContentSearchEntity";
import { ArticleInput } from "./ArticleInput";

/**
 * ArticleResolver
 *
 * @author hoge(hoge@mediba.jp)
 */
@Resolver()
export class ArticleResolver {

    /**
     * constructor
     *
     * @param Repository<Article> articleRepository
     */
    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>
    ) {}

    /**
     * 記事を取得する
     *
     * @param code 記事ID
     *
     * @returns Promise<Article | undefined>
     */
    @Query(returns => Article, { nullable: true })
    public async getArticleById(@Args() { code }: ArticleInput): Promise<Article | undefined> {

        // TODO: memcache
        const res = await this.articleRepository.findOne({
            where: {
                code: code,
                deleted_flag: 0
            }
        });

        return res;
    }

    /**
     * 記事一覧を取得する
     *
     * @param number offset
     * @param number limit
     *
     * @returns Promise<Article[]>
     */
    @Query(returns => [Article], { nullable: false })
    public async getArticles(@Args() { offset, limit }: ArticleInput): Promise<Article[]> {

        return this.articleRepository.find({
            take: limit || 20,
            skip: offset || 0,
        });
    }

    // TODO: 一軍
    public async getFirst(/*by tab*/) {

    }

    // TODO: 二軍
    public async getSecond(/*by tab*/) {

    }
}
