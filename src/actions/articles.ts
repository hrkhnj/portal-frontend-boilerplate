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
