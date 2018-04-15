import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from '../utils/withRedux'
import { initStore, addArticle } from '../store'
import Layout from '../components/Layout'
import routes from '../routes'

const { Link } = routes

interface article {
    articleId: number,
}

interface Props {
    isServer: boolean,
    addArticle: Function,
    articles: Array<article>,
}

class Index extends React.Component<Props> {
    public static async getInitialProps({store, isServer, initialState, addArticle}) {
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
                    {this.props.articles.map((data) => {
                        return <li>
                            <Link route="article" params={{articleId: data.articleId}}>
                                <a>
                                    <p>article {data.articleId} title</p>
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
