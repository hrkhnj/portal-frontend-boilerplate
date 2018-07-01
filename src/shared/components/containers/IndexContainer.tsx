/**
 * IndexContainer class file
 *
 * @package Components
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import * as React from "react";
import { ContainerProps, ContainerState } from "../props/ContainerProps";
// import { IndexSpTemplate } from "../templates/sp/IndexSpTemplate";

/**
 * IndexContainer
 * React Lifecycle順（callされる順）にメソッド置いてます
 *
 * @author hoge(hoge@mediba.jp)
 */
export class IndexContainer extends React.Component<ContainerProps, ContainerState> {

    /**
     * constructor
     * <<<サーバー側/フロント側で呼ばれる>>>
     * SSRするとき or SPAで初めて遷移した場合
     *
     * @param props props
     * @param ctx コンテキスト
     */
    constructor(props: ContainerProps, ctx?: any) {
        super(props, ctx);
        console.log("__CONTAINER_STATE*******" + JSON.stringify(this.props.article));

    }

    /**
     * React Lifecycle
     *
     * - マウントされる直前に1回だけ呼ばれる
     * - 初期化処理を行うのに適している
     * - コンポーネントがDOMツリーに追加される前に1度だけ呼ばれる
     * - このメソッド内でsetstate()するとrender時にまとめて行われる
     *
     * <<<サーバー側/フロント側で呼ばれる>>>
     *
     * @returns void
     */
    public componentWillmount(): void {
        //
    }

    /**
     * render
     * <<<サーバー側/フロント側で呼ばれる>>>
     *
     * @returns ReactNode
     */
    public render(): React.ReactNode {

        // TODO: UserAgentからdevicetypeみてroot templateを振り分ける
        return (
            <div>
                <li>hogehoge</li>
            </div>
        );
    }

    /**
     * React Lifecycle
     *
     * - マウントされた直後に1回だけ呼ばれる
     * - DOMに関わる初期処理を行いたい時に便利
     * - コンポーネントがDOMツリーに追加された状態で呼ばれる
     *
     * @returns void
     */
    // public componentDidMount(): void {
    //     //
    // }

    /**
     * React Lifecycle
     *
     * - コンポーネントがプロパティの値を受けるときに呼ばれる
     * - プロパティが更新されるときに呼ばれる
     * - 親コンポーネントのStateがPropsとして渡されていて、その変化で(表示以外で)何かしたいときに便利
     *
     * @returns void
     */
    // public componentWillReceiveProps(nextProps: Readonly<ContainerProps>): void {
    //     //
    // }

    /**
     * React Lifecycle
     *
     * - コンポーネントを更新してもいいかどうかの判断を行う
     * - 無駄な処理を無くし、パフォーマンスの向上を行うときに便利
     *
     * @param nextProps props
     * @param nextState state
     * @param nextContext context
     *
     * @return boolean
     */
    public shouldComponentUpdate(
        nextProps: Readonly<ContainerProps>, nextState: Readonly<ContainerState>, nextContext: any): boolean {

        return false;
    }

    /**
     * React Lifecycle
     *
     * - コンポーネントが更新される前に呼ばれる
     * - shouldComponentの戻り値がtrueの場合呼ばれる
     *
     * @returns void
     */
    // public componentWillUpdate(): void {
    //     //
    // }

    //////////////////////////
    // ここでclient.render() //
    //////////////////////////

    /**
     * React Lifecycle
     *
     * - コンポーネントが更新された後に呼ばれる
     * - DOMの変化にフックして何かしたい場合に使うと便利
     *
     * @returns void
     */
    // public componentDidUpdate(): void {
    //     //
    // }

    /**
     * React Lifecycle
     *
     * - コンポーネントがアンマウントする前に呼ばれる
     * - コンポーネントがDOMから削除される時に呼ばれる
     * - Timerの処理やDOMのイベントを解除するときはここで処理をかいておく
     *
     * @returns void
     */
    // public componentWillUnmount(): void {
    //    //
    // }

    /**
     * React Lifecycle
     *
     * ComponentのError Boundary
     * @see https://qiita.com/zaki-yama/items/05307ce251df80849b38
     */
    // public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
          //
    // }
}
