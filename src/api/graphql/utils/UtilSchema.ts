/**
 * UtilSchema class file
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import { Field, ObjectType } from "type-graphql";

/**
 * UtilSchema
 *
 * @author hoge(hoge@mediba.jp)
 */
@ObjectType({ description: "その他諸々" })
export class UtilSchema {

    /**
     * @property number currentTimestamp タイムスタンプ
     */
    @Field()
    currentTimestamp?: number;
}