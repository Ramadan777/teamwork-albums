import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hidingAlbumsAndUsers } from '../redux/actions';

<<<<<<< HEAD

=======
>>>>>>> 7b93955b158d8e37038d982ed843e88a97a256ae
function Header(props) {
  const hidingUsers = useSelector((state) => state.users.hiding);
  const hidingAlbums = useSelector((state) => state.albums.hiding);

  const dispatch = useDispatch();

  const changeHiding = () => {
    dispatch(hidingAlbumsAndUsers());
  }

  return (
    <div className="header">
      ALBUMS
      <div onClick={changeHiding} className="icon">
        { hidingUsers || hidingAlbums ?
          (<i className="fa fa-arrow-left" aria-hidden="true"></i>) :
          (<i className="fa fa-align-left" aria-hidden="true"></i>)
        }
      </div>
    </div>
  );
<<<<<<< HEAD

}
=======
>>>>>>> 7b93955b158d8e37038d982ed843e88a97a256ae

export default Header;
