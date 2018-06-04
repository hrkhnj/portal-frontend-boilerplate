/////////////////////////////////////
//      P M 2    C O N F I G       //
/////////////////////////////////////
// http://pm2.keymetrics.io/docs/usage/application-declaration/#generate-configuration

const path = require("path");

const scriptFile = path.resolve(".build/server/server.js");

module.exports = {
    apps: [{
        watch: true,
        name: "portal_frontend_server",
        script: scriptFile,
        watch: scriptFile, // localのみ
        cwd: path.resolve("."),
        exec_mode: "cluster",
        instances: 1,
        log_date_format: "YYYY-MM-DD HH:mm Z",
        out_file: "../logs/server_ap.log",
        error_file: "../logs/server_error.log",
        env: {
            NODE_ENV: "local",
            PORT: 3000,
        },
        env_production:{
            NODE_ENV: "production"
        },
    }]
}