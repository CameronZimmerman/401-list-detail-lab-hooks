import React, {useState, useEffect} from 'react'
import fetchCharacters from '../../services/starTrekApi'
import ListElement from '../display/ListElement'

const ListPage = ({history}) => {
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
      .then(characters => setCharacters(characters))
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const handleClick = (id) => {
    history.push(`/${id}`)
  }

  return loading? 
    <div>Loading</div> : 
    <ul aria-label="character list">
      {characters.map(character => 
      <li key={character.id}>
        <ListElement name={character.name} image={character.image} id ={character.id} onClick={() => handleClick(character.id)}/>
      </li>
      )}
    </ul>
}

export default ListPage