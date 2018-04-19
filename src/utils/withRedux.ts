import React from 'react'
import { Store } from 'react-redux'
import { connect, Provider } from 'react-redux'

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

// https://github.com/iliakan/detect-node
const checkServer = () => Object.prototype.toString.call(global.process) === '[object process]'

const getOrCreateStore = (initStore: any, initialState: any) => {
    // Always make a new store if server
    if (checkServer() || typeof window === 'undefined') {
        return initStore(initialState)
    }

    // Store in global variable if client
    if (!window[__NEXT_REDUX_STORE__]) {
        window[__NEXT_REDUX_STORE__] = initStore(initialState)
    }
    return window[__NEXT_REDUX_STORE__]
}

export default (...args: any[]) => (Component: any) => {
    // First argument is initStore, the rest are redux connect arguments and get passed
    const [initStore, ...connectArgs] = args

    const ComponentWithRedux: ReduxComponent = (props = {}) => {
        const { store, initialProps, initialState }: ProviderComponentProps = props

        // Connect page to redux with connect arguments
        const ConnectedComponent = connect.apply(null, connectArgs)(Component)

        // Wrap with redux Provider with store
        // Create connected page with initialProps
        return React.createElement(
            Provider,
            { store: store && store.dispatch ? store : getOrCreateStore(initStore, initialState) },
            React.createElement(ConnectedComponent, initialProps),
        )
    }

    ComponentWithRedux.getInitialProps = async (props = {}) => {
        const isServer = checkServer()
        const store = getOrCreateStore(initStore, null)

        // Run page getInitialProps with store and isServer
        const initialProps = Component.getInitialProps
            ? await Component.getInitialProps({ ...props, isServer, store })
            : {}

        return {
            store,
            initialState: store.getState(),
            initialProps,
        }
    }

    return ComponentWithRedux
}
