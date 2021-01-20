import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadPhotos } from '../../redux/actions'
import Photo from './Photo'

function Photos (props) {
  const params = parseInt(useParams().id)

  const photos = useSelector(state => state.photos.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params !== undefined) {
      dispatch(loadPhotos(params))
    }
  }, [params])

  if (isNaN(params)) {
    return (
      <div>Выберите альбом...</div>
    )
  }


  return (
    <div className="photos">
      <div className="row align-items-center justify-content-center">
        {photos.map((photo) => {
          return (
            <Photo key={photo.id} photo={photo}/>
          )
        })}
      </div>
    </div>
  )
}

export default Photos