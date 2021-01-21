import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadAlbums } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import Album from './Album'

function Albums(props) {
  const dispatch = useDispatch();
  const params = useParams().id;

  const albums = useSelector(state => state.albums.items);

  useEffect(() => {
    dispatch(loadAlbums(params))
  }, [dispatch, params]);

  if(!params) {
    return (
      <div className="user-text">Выберите юзера...</div>
    )
  }

  return (
        <ul className="list-group">
          {albums.map(album => {
            return <Album album={album} key={album.id}/>
          })}
        </ul>
  );
}

export default Albums;
