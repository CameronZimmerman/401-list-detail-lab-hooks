import React from 'react'
import PropTypes from 'prop-types'

function List({name, origin, image}) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <p>{origin}</p>
    </div>
  )
}

List.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default List

