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

        case 'ADD_FAV' :
            let newArr = state.repos.slice()
            return {
                ...state,
                repos: newArr.map(
                    repo => 
                    repo.id === action.repo.id 
                    ? {...repo, isFav: !repo.isFav}
                    : repo),
                favorites: action.favorites
            }

        case 'REMOVE_FAV' :
            let repos = state.repos.slice()
            return {
                ...state,
                repos: repos.map(
                    repo => 
                    repo.id === action.repo.id 
                    ? {...repo, isFav: !repo.isFav}
                    : repo),
                favorites: action.favorites
            }

        default : 
            return state
    }
}

