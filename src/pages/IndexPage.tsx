/**
 * Index Page
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
//@ts-ignore
import {Link} from "../shared/routes/index";

export default () => (
    <div>
        <h2>Hello Index</h2>
        
        <ul>
            <Link route="settings"><a>settings</a></Link>
        </ul>
    </div>
)
