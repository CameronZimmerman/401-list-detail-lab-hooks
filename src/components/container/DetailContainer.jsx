import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import fetchCharacters from '../../services/starTrekApi'
import Detail from '../display/Detail'

const DetailContainer = ({match}) => {
  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState({})

  useEffect(() => {
    fetchCharacters(match.params.id)
      .then(character => setCharacter(character))
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  
  return loading? 
    <div>Loading</div> : 
    <Detail {...character} />
}

DetailContainer.propTypes = {
  match: PropTypes.object.isRequired,
}

export default DetailContainer