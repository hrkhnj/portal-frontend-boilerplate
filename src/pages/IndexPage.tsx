/**
 * Index Page
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
// import "./_bootstrap";
import { connect } from "react-redux";
import { Store } from "redux";
import { RootState } from "../shared/stores/RootState";
import { IndexContainer } from "../shared/components/containers/IndexContainer";
import { loadedAction } from "../shared/stores/articles/ArticleAction";

/**
 * 本体
 * connectへは全stateを渡す（graphQLで取得した内容をloadしたりするので、限定しない）
 * https://qiita.com/MegaBlackLabel/items/df868e734d199071b883
 *
 * @author hoge(hoge@mediba.jp)
 */
export default connect(state => state)(class extends IndexContainer {

    /**
     * getInitialProps from next-redux-wrapper
     * 子componentのconstructorより先に呼ばれる
     * 
     * @param Store<RootState> store
     * @param boolean isServer
     * 
     * @returns Promise<any> props
     */
    public static async getInitialProps(
        { store, isServer }: { store: Store<RootState>, isServer: boolean }): Promise<any> {

        console.log(store.getState());

        if (isServer) {
            // TODO: エラーが出るけど普通にトランスパイルできるし動く
            // 原因がわからない・・・とにかくignoreするのは嫌だ
            // @ts-ignore
            store.dispatch(loadedAction(["hoge", "fuga"]));
        }

        console.log(store.getState());
    }
});
