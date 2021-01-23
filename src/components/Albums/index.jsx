import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAlbums } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import Album from './Album';
import ReactLoading from 'react-loading';

function Albums() {
  const dispatch = useDispatch();
  const params = useParams().id;

  const albums = useSelector((state) => state.albums.items);
  const loading = useSelector(state => state.albums.loading);

  useEffect(() => {
    dispatch(loadAlbums(params));
  }, [dispatch, params]);

  if (!params) {
    return <div className="user-text">Выберите юзера...</div>;
  }

  if (loading) {
    return (
      <div className='preload-users'>
        <div>
          Идет загрузка...
        </div>
        <div>
          <ReactLoading type='spin' color='green' height={100} width={100} />
        </div>
      </div>
    )
  }

  return (
    <ul className="list-group">
      {albums.map((album) => {
        return <Album album={album} key={album.id} />;
      })}
    </ul>
  );
}

export default Albums;
