/**
 * InitStore
 * store(stateを管理するやつ)の初期状態を作る
 * ※あんまり触れる機会はないぜベイビー
 * 
 * @package Stores
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import { createStore, applyMiddleware, Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import { rootReducer } from "./RootReducer";
import { RootState } from "./RootState";

/**
 * Store を作成
 *
 * @export
 */
export function initializeStore(initialState?: Object): Store<RootState> {
    return createStore(
        rootReducer,
        initialState!,
        composeWithDevTools(applyMiddleware(thunkMiddleware)));
}