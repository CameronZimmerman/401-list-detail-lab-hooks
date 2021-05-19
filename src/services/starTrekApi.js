export default function fetchCharacters(id = null) {
  const res = await fetch(`https://trek-dex.herokuapp.com/api/v1/characters/${id = null? `` : `${id}`}`)
  const resJson = await res.json()
  
  return resJson.map(({id, name, affiliation, origin, race, imageUrl}) => ({
    id,
    name,
    affiliation,
    race,
    origin,
    image: imageUrl
  }))
}