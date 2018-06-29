/**
 * ArticleState
 * articleにまつわるやつ
 *
 * @package Stores
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */

/**
 * ArticleStateType
 */
export enum ArticleStateType {
    /**
     * @var string 初期値
     */
    INIT = "INIT",

    /**
     * @var LOADED 読み込み完了
     */
    LOADED = "LOADED",
}

/**
 * ArticleState
 */
export interface ArticleState {
    articles: any[];
}

/**
 * InitialArticleState
 * 初期state
 */
export const InitialArticleState: ArticleState = {
    articles: [],
};
