import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Album(props) {
  return (
    <li>
      <Link to={`/${props.album.id}`}>{props.album.title}</Link>
    </li>
  );
}

export default Album;
