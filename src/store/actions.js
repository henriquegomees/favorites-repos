
import ReposService from '../services/Github'

const fetchFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    return{
        type: 'FETCH_FAVORITES',
        payload: favorites
    }
}

const search = (repo, favorites) => (
    async dispatch => {

        const request = await ReposService.search(repo, favorites)
        if(request.length < 1){ return alert('No repos found') }

        dispatch({
            type: 'REPOS_FINDED',
            payload: request
        })
    }
)

const addToFavorite = repo => {
    const repos = []
    if(localStorage.getItem('favorites')){
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        favorites.push(repo)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        return dispatch => dispatch(fetchFavorites())
    }
    repos.push(repo)
    localStorage.setItem('favorites', JSON.stringify(repos))
    return dispatch => dispatch(fetchFavorites())
}

export {
    search,
    addToFavorite,
    fetchFavorites,
}
