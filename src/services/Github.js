import axios from 'axios'

//search() requires the repo name to search and the array of current favorites repos
const search = async (repo, favorites) => {
    let repos   = []
    const limit = 10

    const response = await axios.get(`https://api.github.com/search/repositories?q=${repo}`)
    const data     = response.data.items

    const list = data.slice(0, limit).map(async repo => {
        let isFav = false
        let tag   = ''
        let infos = {}

        /**
         * Returns the repo's tag.
         * If there's no tag to return, it return a hyphen
         */
        tag = await axios.get(repo.tags_url).then(resp => !resp.data[0] ? '-' : resp.data[0].name)

        /* 
         * Searching on favorites array if this repo is already favorited
         * array.find() is the choosed method beacuse it returns the first item wich is true
         * It does not check the remaining values.
        */
        favorites.find(fav => fav.id === repo.id ? isFav = !isFav : isFav)

        infos = {
            id  : repo.id,
            name: repo.full_name,
            lang: repo.language,
            url : repo.html_url, 
            tag,
            isFav
        }

        repos.push(infos)

    })
    await Promise.all(list)
    return repos
}

export default {
    search
}