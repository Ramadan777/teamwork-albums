import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadPhotos } from '../../redux/actions';
import Photo from './Photo';
import ReactLoading from 'react-loading';

function Photos() {
  const params = parseInt(useParams().id);
  const photos = useSelector((state) => state.photos.items);
  const loading = useSelector((state) => state.photos.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params !== undefined) {
      dispatch(loadPhotos(params));
    }
  }, [dispatch, params]);

  if (isNaN(params)) {
    return <div className="photo-text">Выберите альбом...</div>;
  }

  if (loading) {
    return (
      <div className="preload-photos">
        <div>Идет загрузка...</div>
        <div>
          <ReactLoading type="spin" color="green" height={100} width={100} />
        </div>
      </div>
    );
  }

  return (
    <div className="photos">
      <div className="row align-items-center justify-content-center">
        {photos.map((photo) => {
          return <Photo key={photo.id} photo={photo} />;
        })}
      </div>
    </div>
  );
}

export default Photos;
