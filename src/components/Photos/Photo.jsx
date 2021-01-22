import React from 'react';

function Photo(props) {
  return (
    <div className="col-3 mb-3">
      <img src={props.photo.thumbnailUrl} alt="" />
    </div>
  );
}

export default Photo;
