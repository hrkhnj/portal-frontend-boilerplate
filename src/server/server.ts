/**
 * node express server
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import path from "path";
import next from "next";
import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import lusca from "lusca";
import errorHandler from "errorhandler";
//@ts-ignore
import Router from "../shared/routes/index";

const port = parseInt(process.env.PORT as string, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = Router.getRequestHandler(app);

// 鯖
app.prepare().then(() => {

    const server = express();

    // Error Handler（ちゃんと自力で作る予定　今は暫定）
    server.use(errorHandler());

    // 圧縮転送
    server.use(compression());

    // POSTは使わないかもしれないけどいちお
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    // セキュリティ設定
    server.use(lusca.xframe("SAMEORIGIN"));
    server.use(lusca.xssProtection(true));
    server.use(lusca.nosniff());
    server.disable("x-powered-by");

    // 静的資材（localのみ）
    if (process.env.NODE_ENV === "local") {
        server.use("/static", express.static(path.resolve(__dirname, "../static")));
    }

    // routing
    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port);
});
