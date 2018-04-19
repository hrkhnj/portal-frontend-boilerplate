import React from 'react'
import Layout from '../components/Layout'
import withRedux from '../utils/withRedux'
import { initStore } from '../store'
import routes from '../routes'

const { Link } = routes

interface ArticleProps {
    isServer: boolean,
    articleId: number;
    articleTitle: string;
}

class ArticleComponent extends React.Component<ArticleProps, {}, never> {
    public static async getInitialProps({isServer, query, store}: pageArgs) {
        const article = store.getState().articles[query.id]
        return {
            isServer,
            articleId: article.id,
            articleTitle: article.title,
        }
    }
    public render() {
        return (
            <Layout {...this.props}>
                <h1>Article Detail (articleId: {this.props.articleId})</h1>
                <p>title: {this.props.articleTitle}</p>
                <Link route="index">
                    <a>
                        <p>&lt;&lt; Back to Top</p>
                    </a>
                </Link>
            </Layout>
        )
    }
}

export default withRedux(initStore, null, null)(ArticleComponent)
