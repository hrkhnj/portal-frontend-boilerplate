/**
 * RootReducer
 * actionによってstateを返してあげる機構
 *
 * @package Stores
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import { combineReducers } from "redux";

/**
 * rootReducer
 * 分割されたreducerを束ねる役
 * 分割単位：Widgets単位が望ましい
 */
export const rootReducer = combineReducers({
});