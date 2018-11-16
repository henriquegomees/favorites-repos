import axios from 'axios'

const search = async repo => {
    let repos   = []
    const limit = 10

    const response = await axios.get(`https://api.github.com/search/repositories?q=${repo}`)
    const data     = response.data.items

    const list = data.slice(0, limit).map(async repo => {

        let tag = await axios.get(repo.tags_url).then(resp => {
            if(!resp.data[0]){
                return '-'
            }
            return resp.data[0].name
        })

        let infos = {
            id  : repo.id,
            name: repo.full_name,
            lang: repo.language,
            tag 
        }

        repos.push(infos)

    })
    await Promise.all(list)
    return repos
}

export default {
    search
}