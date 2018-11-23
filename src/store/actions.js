
import ReposService from '../services/Github'

const fetchFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    return{
        type: 'FETCH_FAVORITES',
        payload: favorites
    }
}

const search = repo => {
    const request = ReposService.search(repo)
    return {
        type: 'REPOS_FINDED',
        payload: request
    }
}

export {
    search,
    fetchFavorites
}
