import React from 'react';
import PropTypes from 'prop-types';

function Photo(props) {
  return (
    <div className="col-3 mb-3">
      <img src={props.photo.thumbnailUrl} alt="" />
    </div>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Photo;
