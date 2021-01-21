import React from 'react'
import { Link, useParams } from 'react-router-dom'

function User (props) {
  const selectedUserId = parseInt(useParams().id);
  const isSelected = selectedUserId === props.user.id;

  console.log(isSelected);

  return (
    <li className={`list-group-item ${isSelected ? 'list-group-item-info' : ''}`}>
      <Link to={`/${props.user.id}`}>
        <div className="user-name">
          {props.user.name}
        </div>
        <div className="user-email">
          {props.user.email}
        </div>
      </Link>
    </li>
  )
}

export default User