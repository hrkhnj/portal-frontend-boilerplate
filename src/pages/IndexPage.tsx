/**
 * Index Page
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import "./bootstrap";

//@ts-ignore
import { Link } from "../shared/routes/index";

import fetch from "isomorphic-unfetch";
import { execute } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const uri = "https://local.api.universal.auone.jp/";
const link = new HttpLink({ uri: uri, fetch });

const operation = {
  query: gql`
  query article {
    getArticles(offset: 1, limit: 20) {
        id,
        code,
        title
    },
    getUtils {
        currentTimestamp
    }  
  }
  `,
};

// どうやって
execute(link, operation).subscribe({
  next: data => console.log(`received data: ${JSON.stringify(data, null, 2)}`),
  error: error => console.log(`received error ${error}`),
  complete: () => console.log(`complete`),
})



export default () => (
    <div>
        <h2>Hello Index</h2>
        <ul>
            <Link route="settings"><a>settings</a></Link>
        </ul>
    </div>
)

