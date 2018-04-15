import React from 'react'
import Layout from '../components/Layout'
import withRedux from '../utils/withRedux'
import { initStore } from '../store'
import routes from '../routes'

const { Link } = routes

interface ArticleProps {
    isServer: boolean,
    articleId: number;
}

class Article extends React.Component<ArticleProps> {
    public static async getInitialProps({isServer, query}) {
        return {
            isServer,
            articleId: query.articleId,
        }
    }
    public render() {
        return (
            <Layout {...this.props}>
                <h1>Article Detail (articleId: { this.props.articleId })</h1>
                <Link route="index">
                    <a>
                        <p>&lt;&lt; Back to Top</p>
                    </a>
                </Link>
            </Layout>
        )
    }
}

export default withRedux(initStore, null, null)(Article)
