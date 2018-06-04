/**
 * graphql server
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
import "./bootstrap";
import "reflect-metadata";
import { GraphQLServer, Options } from "graphql-yoga";
import * as TypeGraphQL from "type-graphql";
import * as TypeORM from "typeorm";
import { Container } from "typedi";
import cors from "cors"

const port = parseInt(process.env.PORT as string, 10) || 3001;
const isProduction: boolean = process.env.NODE_ENV === "production";

// IOCコンテナ
TypeGraphQL.useContainer(Container);
TypeORM.useContainer(Container);

/**
 * server
 * TODO: セキュリティ周りを気にする
 */
async function run() {

    try {
        // DB
        // TODO: 設定ファイル化
        await TypeORM.createConnection({
            type: "mysql",
            database: "portal",
            username: "portal_user",
            password: "portal_password",
            port: 3306,
            host: "mysql",
            entities: [
                __dirname + "/../shared/entities/*Entity.js"
            ],
            synchronize: false,
            logger: "advanced-console",
            logging: "all",
            maxQueryExecutionTime: 1000 * 5,
            // 絶対にtrueにしちゃダメだから、絶対
            dropSchema: false,
            // cacheはquery-result-cacheテーブルが必要らしい・・・or redis
            cache: false,
        });

        // build schema
        // トランスパイル後のパスにしとく
        const schema = await TypeGraphQL.buildSchema({
            resolvers: [
                __dirname + "/graphql/**/*Resolver.js"
            ],
        });

        // Create GraphQL server
        const server = new GraphQLServer({ schema });

        // Configure server options
        // TODO: x-powerd-byを消したい（expressだとapp.disable("x-powerd-by")が出来るけど・・・）
        const serverOptions: Options = {
            port: port,
            endpoint: "/graphql",

            // 商用じゃさすがに
            playground: isProduction ? false : "/playground",

            // cors
            // TODO: 設定ファイル化
            cors: {
                origin: "*",
                methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
                preflightContinue: false,
                optionsSuccessStatus: 204,
            },

            // 商用以外ね
            debug: !isProduction,
        };

        // Start the server
        server.start(serverOptions);
    } catch (err) {
        console.error(err);
    }
}

run();
