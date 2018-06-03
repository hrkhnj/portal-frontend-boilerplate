/**
 * FortuneResolver class file
 *
 * @package Dailytools
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import { Resolver, Query, Args } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { FortuneItemEntity as FortuneItem } from "../../../shared/entities/FortuneItemEntity";
import { FortuneInput } from "./FortuneInput";

/**
 * FortuneResolver
 *
 * @author hoge(hoge@mediba.jp)
 */
@Resolver()
export class FortuneResolver {

    /**
     * constructor
     * 
     * @param Repository<FortuneItem> fortuneRepository
     */
    constructor(
        @InjectRepository(FortuneItem)
        private readonly fortuneRepository: Repository<FortuneItem>
    ) {}

    /**
     * 星座占い情報を返す
     * 
     * @param astro_code 星座コード
     * @returns Promise<FortuneItem>
     */
    @Query(returns => FortuneItem, { nullable: true })
    public async getFortuneInfo(@Args() { astro_code }: FortuneInput): Promise<FortuneItem | undefined> {

        const res = await this.fortuneRepository.find({
            where: {
                astro_code: astro_code,
                deleted_flag: false
            },
            take: 1,
        });

        return res[0];
    }
}