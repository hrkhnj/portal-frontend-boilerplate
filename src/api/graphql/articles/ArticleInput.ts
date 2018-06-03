/**
 * ArticleInput class file
 *
 * @package Article
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import { ArgsType, Field } from "type-graphql";

/**
 * ArticleInput
 *
 * @author hoge(hoge@mediba.jp)
 */
@ArgsType()
export class ArticleInput {

    /**
     * @property string code
     */
    @Field({ nullable: true })
    code?: string;

    /**
     * @property number offset
     */
    @Field({ nullable: true })
    offset?: number;

    /**
     * @property number limit
     */
    @Field({ nullable: true })
    limit?: number;    
}