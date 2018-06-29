/**
 * Index Page
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
// @ts-ignore
import { Link } from "../shared/routes/index";

export default () => (
    <div>
        <h2>Hello Settings</h2>
        <ul>
            <Link prefetch route="index"><a>indexへ</a></Link>
        </ul>
    </div>
);
