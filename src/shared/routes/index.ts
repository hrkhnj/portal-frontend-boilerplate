/**
 * routes
 * d.tsが存在しなかったので、中身はJS
 * 
 * @package Routes
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
const Routes = require("nextjs-dynamic-routes");

const router = new Routes();

// TOPページ
router
.add({
    name: "index",
    pattern: "/",
    page: "/IndexPage"
})
// 設定ページ
.add({
    name: "settings",
    pattern: "/settings",
    page: "/SettingsPage"
})
// 記事詳細ページ
.add({
    name: "detail",
    pattern: "/detail/:articleType/:genreId/:subgenreId/:articleId",
    page: "ArticleDetailPage"
})
// 汎用エラーはnextjs側でpage作る
// https://github.com/zeit/next.js#custom-configuration

module.exports = router;