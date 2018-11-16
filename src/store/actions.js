
import ReposService from '../services/Github'

const search = repo => {
    const request = ReposService.search(repo)
    return {
        type: 'REPOS_FINDED',
        payload: request
    }
}

export {
    search
}
