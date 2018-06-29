/**
 * InitStore
 * store(stateを管理するやつ)の初期状態を作る
 * ※あんまり触れる機会はないぜベイビー
 *
 * @package Stores
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./RootReducer";
import { RootState } from "./RootState";

/**
 * Store を作成
 *
 * @export
 */
export function initialStore(initialState?: RootState): Store<RootState> {
    return createStore<RootState>(
        rootReducer,
        initialState!,
        composeWithDevTools(applyMiddleware(thunk)));
}
