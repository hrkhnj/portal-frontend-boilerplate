/**
 * node express server
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import lusca from "lusca";
import errorHandler from "errorhandler";

const app = express();

// Error Handler（ちゃんと自力で作る予定　今は暫定）
app.use(errorHandler());

// port
app.set("port", parseInt(process.env.PORT as string, 10) || 3001);

// 圧縮転送
app.use(compression());

// POSTは使わないかもしれないけどいちお
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// セキュリティ設定
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(lusca.nosniff());
app.disable("x-powered-by");

// ルーティング（別ファイルにする予定）
app.get("*", (req: express.Request, res: express.Response) => {
  res.status(200).send("Hello Api");
});

// Start Express server.
app.listen(app.get("port"));
