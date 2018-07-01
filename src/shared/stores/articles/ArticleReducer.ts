/**
 * ArticleReducer
 * articleにまつわるやつ
 * actionによってstateを返してあげる機構
 *
 * @package Stores
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import { Reducer, AnyAction } from "redux";
import { InitialArticleState, ArticleState, ArticleStateType } from "./ArticleState";

/**
 * articleReducer
 * action typeを見てstateを返してあげる役
 * 
 * @author hoge(hoge@mediba.jp)
 */
export const articleReducer: Reducer<ArticleState> = (
    state: ArticleState = InitialArticleState, action: AnyAction): ArticleState => {

    /**
     * よく見るswitch
     * （おしゃれなmoduleでかっこよく書くにはまだ早いぜおの）
     */
    switch (action.type) {
        // 初期化
        case ArticleStateType.INIT:
            return {
                ...state,
                type: ArticleStateType.INIT,
            };

        // 初期読み込み完了
        case ArticleStateType.LOADED:
            return {
                ...state,
                articles: action.articles,
                type: ArticleStateType.LOADED,
            };

        // 受けたstateをママ返す系
        default:
            return {
                ...state,
            };
    }
};
