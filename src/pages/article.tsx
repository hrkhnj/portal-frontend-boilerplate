import React from 'react'
import Layout from '../components/Layout'
import routes from '../routes'

const { Link } = routes

interface Query {
    articleId: number
}

interface Url {
    query: Query
}

interface ArticleProps {
    isServer: boolean,
    url: Url;
}

class Article extends React.Component<ArticleProps> {
    public static async getInitialProps(args) {
        const isServer = typeof window === 'undefined'
        if (isServer) {
            return {
                isServer,
                url: {
                    args: args.query,
                },
            }
        } else {
            return {...args, isServer}
        }
    }
    public render() {
        return (
            <Layout {...this.props}>
                <h1>Article Detail (articleId: { this.props.url.query.articleId })</h1>
                <Link route="index">
                    <a>
                        <p>&lt;&lt; Back to Top</p>
                    </a>
                </Link>
            </Layout>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }
export default Article
// export default withRedux(initStore, null, mapDispatchToProps)(Article)
