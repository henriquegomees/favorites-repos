
const get = async () => {
  const favs = await JSON.parse(localStorage.getItem('favorites'))
  if(!favs){
    return []
  }
  return favs
}

const set = favorites => localStorage.setItem('favorites', JSON.stringify(favorites))

export default {
  get,
  set
}