import React, { useState } from 'react';
import Style from './style.module.scss';

export const ImageModal = ({ image, currentIndex, allImages }) => {
  const [imageIndex, setImageIndex] = useState(currentIndex);
  return (
    <div className={Style['image-modal-wrapper']}>
      <div
        className={Style['image-container']}
        style={{
          backgroundImage: `url(${allImages[imageIndex].urls.regular})`,
        }}
      >
        <button
          onClick={() => setImageIndex((imageIndex + 1) % allImages.length)}
          className={`${Style['directionButton']} ${Style['go-button']}`}
        >
          {'Go'}
        </button>
        <img
          className={Style['image']}
          src={allImages[imageIndex].urls.regular}
        />
        <button
          onClick={() =>
            setImageIndex(
              (imageIndex - 1 + allImages.length) % allImages.length
            )
          }
          className={`${Style['directionButton']} ${Style['back-button']}`}
        >
          {'Back'}
        </button>
      </div>

      <div className={Style['image-details-container']}>
        <p>Details</p>
        <p>
          <span>description:</span> {allImages[imageIndex].alt_description}
        </p>
        <p>
          <span>created_at:</span> {allImages[imageIndex].created_at}
        </p>
        <p>
          <span>height:</span> {allImages[imageIndex].height}
        </p>
        <p>
          <span>width:</span> {allImages[imageIndex].width}
        </p>
        <p>
          <span>likes:</span> {allImages[imageIndex].likes}
        </p>
        <p>
          <span>created by:</span> {allImages[imageIndex].user.username}
        </p>
      </div>
    </div>
  );
};
