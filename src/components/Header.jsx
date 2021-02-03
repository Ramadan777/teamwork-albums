import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideShow, hidingAlbumsAndUsers } from '../redux/actions';

function Header() {
  const hidingUsers = useSelector((state) => state.users.hidden);

  const show = useSelector((state) => state.theme.show);

  const dispatch = useDispatch();

  const changeHiding = () => {
    dispatch(hidingAlbumsAndUsers());
  };

  const hide = () => {
    dispatch(hideShow());
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
      <button className="button" onClick={hide}>
        {show ? '🌞' : '🌛'}
      </button>
    </div>
  );
}

export default Header;
