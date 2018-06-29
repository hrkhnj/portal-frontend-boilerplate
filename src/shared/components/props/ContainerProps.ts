/**
 * ContainerProps file
 * Container Component共通のProps/State定義
 *
 * @package Components
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import { NextContext } from "next";
import { RootState } from "../../stores/RootState";

/**
 * Containerのprops
 * @see pages/_app.tsx
 */
export interface ContainerProps {
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
