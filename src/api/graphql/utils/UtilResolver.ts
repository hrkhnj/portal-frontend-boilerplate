/**
 * UtilResolver class file
 *
 * @package Util
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import { Resolver, Query } from "type-graphql";
import { UtilSchema as Util } from "./UtilSchema";

/**
 * UtilResolver
 *
 * @author hoge(hoge@mediba.jp)
 */
@Resolver()
export class UtilResolver {

    /**
     * ユーティリティな処理
     * 
     * @returns Promise<Util>
     */
    @Query(returns => Util)
    public async getUtils(): Promise<Util> {

        return {
            currentTimestamp: await this.getCurrentTimestamp(),
        };
    }

    /**
     * timestampを返す
     * 
     * @returns number timestamp
     */
    private async getCurrentTimestamp(): Promise<number> {
        // TODO: 詐称可能な状態で作る
        return Date.now();
    }
}