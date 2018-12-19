
import ReposService from 'services/Github'
import Favorites    from 'services/FavoritesRepos'

const fetchFavorites = () => {
    const favorites = Favorites.get()
    
    return dispatch => dispatch({
        type: 'FETCH_FAVORITES',
        payload: favorites
    })
}

const search = async (repo, favorites) => {
    const request = await ReposService.search(repo, favorites)
    if(request.length < 1){ return alert('No repos found') }

    return dispatch => {
        dispatch({
            type: 'REPOS_FINDED',
            payload: request
        })
    }
}

const addToFavorites = async repo => {
    const favorites = await Favorites.get()
    favorites.push(repo)
    Favorites.set(favorites)

    console.log(favorites)

    return dispatch => dispatch({
        type: 'ADD_FAV',
        favorites,
        repo
    })
}

const removeFavorite = async ({repo, index}) => {
    const favorites = await Favorites.get()

    favorites.splice(index, 1)
    Favorites.set(favorites)
    
    return dispatch => dispatch({
        type: 'REMOVE_FAV',
        favorites,
        repo
    })
}

export {
    search,
    addToFavorites,
    removeFavorite,
    fetchFavorites,
}
