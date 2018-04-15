// import { createStore, applyMiddleware } from 'redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'

export const initialStateDefault = {
    count: 2,
    articles: [
        {articleId: 1},
        {articleId: 2},
    ],
}

export const initStore = (initialState = initialStateDefault) => {
    const store = createStore(reducer, initialState === null ? initialStateDefault : initialState)
    return store
}
