import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from '../utils/withRedux'
import { initStore } from '../store'
import { addArticle } from '../actions/index'
import Layout from '../components/Layout'
import routes from '../routes'

const { Link } = routes

interface ContextObject {
    store,
    initialState,
    isServer,
    addArticle: () => {}
}

interface IndexProps {
    isServer: boolean,
    addArticle: () => {},
    articles: Article[],
}

class Index extends React.Component<IndexProps> {
    // tslint:disable-next-line: no-shadowed-variable
    public static async getInitialProps({store, isServer, addArticle}: ContextObject) {
        return {
            isServer,
            articles: store.getState().articles,
            addArticle,
        }
    }
    public render() {
        return (
            <Layout {...this.props}>
                <h1>Article List</h1>
                <button onClick={() => {
                    this.props.addArticle()
                }}>Add Article</button>
                <ul>
                    {Object.keys(this.props.articles).map((i) => {
                        const data = this.props.articles[i]
                        return <li>
                            <Link route="article" params={{articleId: data.id}}>
                                <a>
                                    <p>article {data.id} 「{data.title}」</p>
                                </a>
                            </Link>
                            <Link route={`article/${data.articleId}`}>
                                <a>
                                    <p>[fail-single] article {data.articleId} title</p>
                                </a>
                            </Link>
                        </li>
                    })}
                </ul>
            </Layout>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        articles: state.articles,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: bindActionCreators(addArticle, dispatch),
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index)
