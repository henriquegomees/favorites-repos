const INITIAL_STATE = {
    repos: [],
    favRepos: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'REPOS_FINDED' :
            return { ...state, repos: action.payload }
        default : 
            return state
    }
}

