
import ReposService from '../services/Github'

const fetchFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    return{
        type: 'FETCH_FAVORITES',
        payload: favorites
    }
}

const search = repo => (
    async dispatch => {

        const request = await ReposService.search(repo)
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
        return localStorage.setItem('favorites', JSON.stringify(favorites))
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
