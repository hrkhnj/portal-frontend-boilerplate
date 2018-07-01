/**
 * ContainerProps file
 * Container Component共通のProps/State定義
 *
 * @package Components
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import { NextContext } from "next";
import { Dispatch, AnyAction } from "redux";
import { RootState } from "../../stores/RootState";

/**
 * Containerのprops
 * Redux.connectで全stateを渡す事を想定してRootState型を継承
 * 
 * @see pages/_app.tsx
 */
export interface ContainerProps extends RootState {
    /**
     * @var Dispatch<AnyAction> Dispatch
     */
    dispatch: Dispatch<AnyAction>;

    /**
     * @var NextContext context
     */
    context: NextContext;
}

/**
 * ContainerState
 * ただのaliasだ・・・
 */
export type ContainerState = RootState;
