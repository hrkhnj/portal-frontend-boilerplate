/**
 * ArticleAction
 * articleにまつわるやつ
 * action
 *
 * @package Stores
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import { AnyAction, Dispatch } from "redux";
import { ArticleStateType } from "./ArticleState";

/**
 * ArticleActionArgs
 */
export interface ArticleAction extends AnyAction {
    type: ArticleStateType;
    articles: any[];
    hoge?: any;
}

/**
 * Actions
 */

/**
 * 初期処理するやつ
 * @returns ArticleAction
 */
export const initializeAction = () => (dispatch: Dispatch<ArticleAction>) => {

    // ArticleAction型を返す
    return dispatch({
        type: ArticleStateType.INIT,
        articles: [],
    });
};

/**
 * loadし終わったやつ
 * @returns ArticleAction
 */
export const loadedAction = (payload: any[]) => (dispatch: Dispatch<ArticleAction>) => {

    // ArticleAction型を返す
    return dispatch({
        type: ArticleStateType.LOADED,
        articles: payload,
    });
};
