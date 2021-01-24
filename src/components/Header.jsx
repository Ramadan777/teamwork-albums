import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hidingAlbumsAndUsers } from '../redux/actions';

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

export default Header;
