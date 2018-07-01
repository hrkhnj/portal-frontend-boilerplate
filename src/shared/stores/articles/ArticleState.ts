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
    /**
     * @var ArticleStateType 状態名
     */
    type: ArticleStateType;

    /**
     * @var any[] articles サンプル的に入れてる TODO:graphQLのSchema型にする
     */
    articles: any[];

    /**
     * @var any hoge ← サンプル的に入れてる
     */
    hoge?: any;
}

/**
 * InitialArticleState
 * 初期state
 */
export const InitialArticleState: ArticleState = {
    type: ArticleStateType.INIT,
    articles: [],
};
