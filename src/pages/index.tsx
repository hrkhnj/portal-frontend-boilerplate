import React from 'react'
import Layout from '../components/Layout'
import { Link } from '../routes'

class Index extends React.Component {
    render () {
        return (
            <Layout>
                <h1>Article List</h1>
                <ul>
                    <li>
                        <Link route="article/1">
                            <a>
                                <p>article 1 title</p>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link route="article/2">
                            <a>
                                <p>article 2 title</p>
                            </a>
                        </Link>
                    </li>
                </ul>
            </Layout>
        )
    }
}

export default Index
