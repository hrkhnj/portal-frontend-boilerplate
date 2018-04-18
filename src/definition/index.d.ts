interface ProviderComponentProps {
    store?: Store,
    initialProps?: object,
    initialState?: object,
}

interface ReduxComponent {
    (ProviderComponentProps) : React.ReactNode
    getInitialProps?: Function,
}

interface Article {
    id: string,
    title: string,
}
