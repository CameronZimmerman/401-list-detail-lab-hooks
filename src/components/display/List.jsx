import React from 'react'
import PropTypes from 'prop-types'

function List({name, image}) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
    </div>
  )
}

List.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default List

