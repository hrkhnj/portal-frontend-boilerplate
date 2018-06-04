/**
 * FortuneInput class file
 *
 * @package Article
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import { ArgsType, Field } from "type-graphql";

/**
 * FortuneInput
 *
 * @author hoge(hoge@mediba.jp)
 */
@ArgsType()
export class FortuneInput {

    /**
     * @property string astro_code
     */
    @Field({ nullable: true })
    astro_code?: number;  
}