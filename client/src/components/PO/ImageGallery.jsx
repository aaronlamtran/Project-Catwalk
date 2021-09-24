/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

const ImageGallery = (props) => {
  const { photos, photoIndex, setPhotoIndex } = props;
  const [modal, setModal] = useState(false);

  const mappedPhotos = photos.map((photo, index) => (
    <Image
      key={index.toString()}
      index={index}
      thumb={photo.thumbnail_url}
      setPhotoIndex={setPhotoIndex}
    />
  ));

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    < >
      {modal && (
        <div
          onClick={toggleModal}
          onKeyPress={toggleModal}
          className="overlay"
          role="button"
          tabIndex={0}
        >
          <div>
            <img
              id="image-gallery-modal"
              alt="style"
              src={photos[photoIndex].url}
            />
          </div>
        </div>
      )}
      {(() => {
        if (photos.length !== 0) {
          if (!photos[photoIndex].url) { return (<div id="no-photos">no photos available</div>); }
          return (
            < >
              <div id="image-selector">
                {mappedPhotos}
              </div>
              <div
                role="button"
                id="left-arrow"
                className="gallery-arrow"
                onClick={() => {
                  if (photoIndex === 0) {
                    setPhotoIndex(photos.length - 1);
                    return;
                  }

                  setPhotoIndex(photoIndex - 1);
                }}
                onKeyPress={() => {}}
                tabIndex={0}
              >
                <img src="./static/left-arrow.svg" height="10px" alt="right-arrow" />
              </div>
              <div
                className="main-image"
                role="button"
                onClick={toggleModal}
                tabIndex={0}
                onKeyPress={toggleModal}
              >
                <img
                  alt="style"
                  src={photos[photoIndex].url}
                />
              </div>
              <div
                role="button"
                id="right-arrow"
                className="gallery-arrow"
                onClick={() => {
                  if (photoIndex === photos.length - 1) {
                    setPhotoIndex(0);
                    return;
                  }
                  setPhotoIndex(photoIndex + 1);
                }}
                onKeyPress={() => {}}
                tabIndex={0}
              >
                <img src="./static/right-arrow.svg" height="10px" alt="right-arrow" />
              </div>
            </>
          );
        }
        return ('');
      })()}
    </>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array,
  photoIndex: PropTypes.number,
  setPhotoIndex: PropTypes.func,
};

ImageGallery.defaultProps = {
  photos: [],
  photoIndex: 0,
  setPhotoIndex: null,
};

export default ImageGallery;
