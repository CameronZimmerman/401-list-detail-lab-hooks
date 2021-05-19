import React from 'react'
import PropTypes from 'prop-types'

function ListElement({name, image, id, onClick}) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} onClick={onClick}/>
    </div>
  )
}

ListElement.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ListElement

