
import ReposService from '../services/Github'

const search = repo => {
    ReposService.search(repo)
}

export default {
    search
}
