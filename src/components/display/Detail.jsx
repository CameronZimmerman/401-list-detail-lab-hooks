import React from 'react'
import PropTypes from 'prop-types'

function Detail({name, affiliation, origin, race, image}) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{affiliation}</p>
      <p>{race}</p>
      <p>{origin}</p>
    </div>
  )
}

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
}

export default Detail

