/**
 * RootState
 * 各stateの型定義
 *
 * @package Stores
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
// import { TraversalState } from "./common/TraversalState";
import { ArticleState } from "./articles/ArticleState";
// import { HeaderState } from "./header/HeaderState";
// import { InfomationState } from "./infomation/InfomationState";
// import { DailytoolState } from "./dailytool/DailytoolState";
// import { SearchboxState } from "./searchbox/SearchboxState";

/**
 * RootState
 * 単位：Widgets単位が望ましい
 */
export interface RootState {
//    traversal: TraversalState;
    article: ArticleState;
//    header: HeaderState;
//    infomation: InfomationState;
//    dailytool: DailytoolState;
//    searchbox: SearchboxState;
}
