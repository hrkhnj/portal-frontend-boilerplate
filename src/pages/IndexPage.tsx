/**
 * Index Page
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
// import "./_bootstrap";
import { IndexContainer } from "../shared/components/containers/IndexContainer";

/**
 * 本体
 *
 * @author hoge(hoge@mediba.jp)
 */
export default class extends IndexContainer {

    /**
     * getInitialProps
     *
     * @returns [] props
     */
    public static async getInitialProps({ ctx }): Promise<any> {
        return {};
    }
}
