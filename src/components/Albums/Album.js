import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Album (props) {

  return (
    <li className={`list-group-item ${selectedAlbumsId ? 'list-group-item-action' : ''}`}>
      <Link to={`/${props.album.id}`}>
        {props.album.title}
      </Link>
    </li>
  )
}

export default Album