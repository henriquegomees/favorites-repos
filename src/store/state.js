const INITIAL_STATE = {
    repos: [],
    favorites: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'REPOS_FINDED' :
            return { ...state, repos: action.payload }
        case 'FETCH_FAVORITES' : 
            return { ...state, favorites: action.payload }
        default : 
            return state
    }
}

