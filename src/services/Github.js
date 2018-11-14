import axios from 'axios'

const search = async repo => {
    let newRepos = []
    let count    = 1
    let tag      = ''
    
    let response = await axios.get(`https://api.github.com/search/repositories?q=${repo}`)

    let data = response.data.items

    data.map(repo => {
        if(count <= 10){
            let infos = {
                id: repo.id,
                name: repo.full_name,
                lang: repo.language,
            }

            tag = 'v1.5.7'

            infos = {
                ...infos,
                tag
            }
            
            newRepos.push(infos)
        }
        count++
    })
    return newRepos
}

export default {
    search
}