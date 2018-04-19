interface ContextObject {
    store: Redux.Store,
    initialState,
    isServer,
    addArticle: () => {}
}

interface ProviderComponentProps {
    store?: Redux.Store,
    initialProps?: object,
    initialState?: object,
}

interface ReduxComponent {
    (ProviderComponentProps) : React.ReactNode
    getInitialProps?: Function,
}

interface Article {
    [key: string]: any;
    id: string,
    title: string,
}

interface query {
    id: string,
}

interface pageArgs {
    isServer: boolean,
    query: query,
    store: Redux.Store,
}

interface ComponentWithRedux extends React.Component {
    setState: function,
    getInitialProps: function
}

// type Store<S> = Redux.Store<S>;

interface Window {
    __NEXT_REDUX_STORE__: string;
}

// declare class IndexComponent extends React.Component<any, any>

class IndexComponent<P = {}, S = {}> extends Component<P, S> { }

interface IndexComponent<P = {}, S = {}> extends Component<P, S> {
}
