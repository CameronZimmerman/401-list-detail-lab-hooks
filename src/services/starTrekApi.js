export default async function fetchCharacters(id="") {
  const res = await fetch(`https://trek-dex.herokuapp.com/api/v1/characters/${id}`)
  const resJson = await res.json()
  
  if (id !== "") return {
    id: resJson.id,
    name: resJson.name,
    affiliation: resJson.affiliation,
    race: resJson.race,
    origin: resJson.origin,
    image: resJson.imageUrl

  }

  return resJson.map(({id, name, affiliation, origin, race, imageUrl}) => ({
    id,
    name,
    affiliation,
    race,
    origin,
    image: imageUrl
  }))
}