import React from 'react';
import { Link, useParams } from 'react-router-dom'

function Album(props) {
  const selectedAlbumId = parseInt(useParams().id);

  const isSelectedAlbum = selectedAlbumId === props.album.id;

  return (
    <li className={`list-group-item ${isSelectedAlbum ? 'list-group-item-dark' : ''}`}>
      <Link to={`/${props.album.userId}/${props.album.id}`}>
        {props.album.title}
      </Link>
    </li>
  );
}

export default Album;
