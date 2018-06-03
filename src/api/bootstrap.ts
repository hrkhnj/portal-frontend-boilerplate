/**
 * api initial setting
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */

import { Container } from "typedi";
import { Datetimer } from "../shared/libs/Datetimer";

// containerに色々詰める
// 日付　
Container.set("Date", new class extends Datetimer {
    public setCurrentDatetime(datetime: string): void {
        //none
    }
});

// UserAgent(navigatorに依存しないように)
//Container.set("UserAgent", new class extends UserAgent {
//
//});

// 
