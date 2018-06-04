/**
 * watcher
 * localのみ
 *
 * @copyright mediba inc.
 * @since 2018.XX.XX
 */
const chokidar = require("chokidar");
const exec = require("child_process").execSync;

const targetTsPaths = [
    "./**/*.ts*",
    "../shared/**/*.ts*",
    "../config/**/*.ts*"
];

const targetBuildPaths = [
    "../.build/api/**/*.js*",
    "../.build/shared/**/*.js*",
    "../.build/config/**/*.js*",
];

chokidar.watch(targetTsPaths).on("change", (path) => {
    console.log(path);
    exec("npm run build");
});

chokidar.watch(targetBuildPaths).on("change", (path) => {
    console.log(path);
    exec("NODE_ENV=local npm run reload");
});
