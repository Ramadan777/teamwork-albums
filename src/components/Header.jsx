import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hidingAlbumsAndUsers } from '../redux/actions';

function Header() {
  const hidingUsers = useSelector((state) => state.users.hidden);

  const dispatch = useDispatch();

  const changeHiding = () => {
    dispatch(hidingAlbumsAndUsers());
  };

  return (
    <div className="header">
      ALBUMS
      <div onClick={changeHiding} className="icon">
        {hidingUsers ? (
          <i className="fa fa-arrow-left" aria-hidden="true" />
        ) : (
          <i className="fa fa-align-left" aria-hidden="true" />
        )}
      </div>
    </div>
  );
}

export default Header;
