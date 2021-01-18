import React from 'react';

function Photo(props) {
  return (
    <div className="col-3 mt-3 mb-3">
      <img src={props.photo.thumbnailUrl} />
    </div>
  );
}

export default Photo;
