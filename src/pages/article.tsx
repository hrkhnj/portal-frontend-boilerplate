import React from 'react'
import Layout from '../components/Layout'
import { Link } from '../routes'

interface IUrl {
    url: object;
}

interface IProps {
    url: IUrl;
}

class Article extends React.Component<IProps, {}> {
    public render() {
        return (
            <Layout>
                <h1>article { this.props.url.query.id }</h1>
                <Link route="index">
                    <a>
                        <p> to Top</p>
                    </a>
                </Link>
            </Layout>
        )
    }
}

export default Article
