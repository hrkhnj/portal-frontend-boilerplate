// import { createStore, applyMiddleware } from 'redux'
import { createStore } from 'redux'
import reducer from './reducer/index'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'

export const initialStateDefault = {
    count: 2,
    articles: [
        {articleId: 1},
        {articleId: 2},
    ],
}

export const actionTypes = {
    AddArticle: 'AddArticle',
}

// [todo] when use redux-thunk
// export const addArticle = () => dispatch => {
//     return dispatch({ type: actionTypes.AddArticle })
// }
export const addArticle = () => {
    return { type: actionTypes.AddArticle }
}

export const initStore = (initialState = initialStateDefault) => {
    const store = createStore(reducer, initialState === null ? initialStateDefault : initialState)
    return store
}
