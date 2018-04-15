import { actionTypes, initialStateDefault } from '../store'

export default (state = initialStateDefault, action) => {
    switch (action.type) {
        case actionTypes.AddArticle:
            return Object.assign({}, state, {
                count: state.count + 1,
                articles: [...state.articles, {articleId: state.count + 1 }],
            })
        default: return state
    }
}
