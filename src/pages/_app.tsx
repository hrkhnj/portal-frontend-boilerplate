/**
 * App
 * page componentの上位
 * こいつでcomponentの最後の仕上げをしてあげる
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import withRedux from "next-redux-wrapper";
import { NextContext } from "next";
import App, { Container, AppComponentProps } from "next/app";
import { RootState } from "../shared/stores/RootState";
import { initializeStore } from "../shared/stores/InitializeStore";

/**
 * InjectedStoreProps
 */
export interface InjectedStoreProps {
    store: Store<RootState>;
}

/**
 * AppProps
 */
export type AppProps = AppComponentProps & InjectedStoreProps;

/**
 * PortalApp
 * next-redux-wrapperによってnextjs<->reduxをつないでいる
 * initializeStoreに渡す初期stateは、SSRによって状態更新した内容が渡る
 * （window.__NEXT_DATA__.props.initialStateとしてclientに渡している）
 *
 * @author hoge(hoge@mediba.jp)
 */
export default withRedux(initializeStore)(class PortalApp extends App<AppProps> {

    /**
     * (private)@property NextContext nextContext
     * だいぶ強引だけど・・・
     */
    private static nextContext: NextContext;

    /**
     * サーバーサイド or SPA遷移時初期に呼ばれる
     * Container Componentに共通的に一番最初にばらまくものをここで用意
     *
     * @param NextContext ctx
     *
     * @returns Promise<any>
     */
    public static async getInitialProps({ Component, ctx }): Promise<any> {

        // nextのcontextを一旦メンバに持つ
        // -> request情報を引き回す為の苦肉の策
        PortalApp.nextContext = ctx as NextContext;

        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    /**
     * render
     * 子Containerにcontextを渡してあげる役
     *
     * @returns ReactNode
     */
    public render(): React.ReactNode {

        const { Component, pageProps, store } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} context={PortalApp.nextContext} />
                </Provider>
            </Container>
        );
    }
})
