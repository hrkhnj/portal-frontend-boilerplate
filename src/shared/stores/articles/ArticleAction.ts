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
 * ArticleAction
 * ArticleState型と一緒だけど・・・AnyActionを継承するって意味でね
 */
export interface ArticleAction extends AnyAction {
    type: ArticleStateType;
    articles: any[];
    hoge?: any;
}

//////////////////////////////////////////////////////
//             A  C  T  I  O  N  S                  //
//////////////////////////////////////////////////////

/**
 * 初期処理するやつ
 * @returns ArticleAction
 */
export const initializeAction = () => (dispatch: Dispatch<ArticleAction>): ArticleAction => {

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
export const loadedAction = (payload: any[]) => (dispatch: Dispatch<ArticleAction>): ArticleAction => {

    // ArticleAction型を返す
    return dispatch({
        type: ArticleStateType.LOADED,
        articles: payload,
    });
};
