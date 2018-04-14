import React from 'react'
import Layout from '../components/Layout'
import { Link, Router } from '../routes'
import LinkOrigin from 'next/link'

class Index extends React.Component {
    public render() {
        return (
            <Layout>
                <h1>Article List</h1>
                <p>
                    <LinkOrigin href="detail">
                        <a>
                            <p>sinple router</p>
                        </a>
                    </LinkOrigin>
                </p>
                <h2>original Router</h2>
                <ul>
                    <li>
                        <LinkOrigin href="article">
                            <a>
                                <p>article no title</p>
                            </a>
                        </LinkOrigin>
                    </li>
                    <li>
                        <LinkOrigin href="article/1">
                            <a>
                                <p>article 1 title</p>
                            </a>
                        </LinkOrigin>
                    </li>
                    <li>
                        <LinkOrigin href="article/2">
                            <a>
                                <p>article 2 title</p>
                            </a>
                        </LinkOrigin>
                    </li>
                </ul>
                <h2>next-routes Router</h2>
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
                    <li>
                        <Link route="article" params={{id: 1}}>
                            <a>
                                <p>article 1 title</p>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link route="article" params={{id: 2}}>
                            <a>
                                <p>article 2 title</p>
                            </a>
                        </Link>
                    </li>
                    {/* <li>
                        <LinkD route="article" id="1">
                            <a>
                                <p>article 1 title</p>
                            </a>
                        </LinkD>
                    </li>
                    <li>
                        <LinkD route="article" id="2">
                            <a>
                                <p>article 2 title</p>
                            </a>
                        </LinkD>
                    </li> */}
                    <li>
                        <a onClick={() => {Router.pushRoute('/article/3')}}>
                            <p>[] article 3 title</p>
                        </a>
                    </li>
                </ul>
            </Layout>
        )
    }
}

export default Index
