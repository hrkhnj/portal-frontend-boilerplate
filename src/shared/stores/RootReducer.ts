/**
 * RootReducer
 * actionによってstateを返してあげる機構
 *
 * @package Stores
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import { combineReducers } from "redux";
import { RootState } from "./RootState";
import { articleReducer as article } from "./articles/ArticleReducer";
// import { headerReducer as header } from "./header/HeaderReducer";
// import { infomationReducer as infomation } from "./infomation/InfomationReducer";
// import { dailytoolReducer as dailytool } from "./dailytool/DailytoolReducer";
// import { searchboxReducer as searchbox } from "./searchbox/SearchboxReducer";

/**
 * rootReducer
 * 分割されたreducerを束ねる役
 * 分割単位：Widgets単位が望ましい
 */
export const rootReducer = combineReducers<RootState>({
    article,
    // header,
    // infomation,
    // dailytool,
    // searchbox,
});
