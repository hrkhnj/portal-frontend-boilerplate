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
            dropSchema: false,
            cache: false,
            // cacheはquery-result-cacheテーブルが必要らしい・・・or redis
            //cache: {
            //    duration: 1000 * 60
            //},
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
        const serverOptions: Options = {
            port: port,
            endpoint: "/",

            // 商用じゃさすがに
            playground: isProduction ? false : "/playground",
        };

        // Start the server
        server.start(serverOptions);
    } catch (err) {
        console.error(err);
    }
}

run();
