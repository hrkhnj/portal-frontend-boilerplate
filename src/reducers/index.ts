import { initialStateDefault } from '../store'
import { actionTypes } from '../actions/index'

export default (state = initialStateDefault, action: any) => {
    switch (action.type) {
        case actionTypes.AddArticle:
            const count = state.count + 1
            return Object.assign({}, state, {
                count,
                articles: {
                    ...state.articles,
                    [count]: {
                        id: state.count + 1,
                        title: `article_${count}_added`,
                    },
                },
            })
        default: return state
    }
}
