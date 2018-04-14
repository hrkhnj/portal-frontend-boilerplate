import React from 'react'
import Layout from '../components/Layout'
import { Link } from '../routes'

interface IUrl {
    query: object;
}

interface IProps {
    url: IUrl;
}

class Article extends React.Component<IProps, {}> {
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

export default Article
