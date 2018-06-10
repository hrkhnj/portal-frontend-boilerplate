/**
 * Global Document
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import React from "react";
import Document, { Head, Main, NextScript } from "next/document"
import styled, { ServerStyleSheet, injectGlobal } from "styled-components"

injectGlobal`
  html {
    font-size: 10px;
  }
  body {
    font-size: 1.6em;
    line-height: 1.6;
  }
`;

/**
 * style footer
 * 
 * @author hoge(hoge@mediba.jp)
 */
const Footer = styled.footer`
    font-size: 80%;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #313131;
`;

/**
 * style address
 * 
 * @author hoge(hoge@mediba.jp)
 */
const Address = styled.address`
    color: #fff;
    letter-spacing: 5px;
    font-style: normal;
`;

/**
 * SiteDocument
 * 
 * @author hoge(hoge@mediba.jp)
 */
export default class SiteDocument extends Document {

    /**
     * 写経 from https://bilalbudhani.com/using-next-js-with-styled-components/
     * 
     * @param renderPage renderPage
     * 
     * @returns {}
     */
    static getInitialProps ({ renderPage }): {} {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();

        return { ...page, styleTags }
    }

    /**
     * render
     * 
     * @returns ReactNode
     */
    public render(): React.ReactNode {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <Footer>
                        <Address>Copyright(C) KDDI/mediba inc.</Address>
                    </Footer>
                </body>
            </html>
        )
    }
}
