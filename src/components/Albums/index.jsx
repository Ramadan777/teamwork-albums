import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadAlbums } from '../../redux/actions'
import { useParams } from 'react-router-dom'
import Album from './Album'


function Albums(props) {
  const dispatch = useDispatch();
  const params = useParams();
  const albums = useSelector(state => state.albums.items);

  useEffect(() => {
    dispatch(loadAlbums(params.id))
  }, [dispatch, params])

  return (
    <ul className="list-group">
      {albums.map(album => {
        return <Album album={album} key={album.id}/>
      })}
    </ul>
  );
}

export default Albums;
