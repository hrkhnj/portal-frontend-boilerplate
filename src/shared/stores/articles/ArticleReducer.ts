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
 * action typeを見てstateを返してあげる
 */
export const articleReducer: Reducer<ArticleState> = (
    state: ArticleState = InitialArticleState, action: AnyAction): ArticleState => {

    /**
     * よく見るswitch
     * （おしゃれなnpmでかっこよく書くにはまだ早い尾野）
     */
    switch (action.type) {

        // 初期化
        case ArticleStateType.INIT:
            const initAction: ArticleState = {
                articles: [],
            };

            return initAction;

        // 受けたstateをママ返す系
        default:
            return state;
    }
};
