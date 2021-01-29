import React, { useState, useContext } from 'react';
import { ImageDetails } from '../ImageDetails';
import { modalContext } from '../../Components/Modal/ModalProvider';
import { ImageModal } from '../../Components/ImageModal';
import Style from './style.module.scss';

export const DisplayImage = ({ image, currentIndex, allImages }) => {
  const { toggleModal, addModalContent } = useContext(modalContext);
  const [isShowDetails, setIsShowDetails] = useState(false);
  const [coordinateY, setCoordinateY] = useState(0);
  const [targetImgId, setTargetImgId] = useState(0);

  const onMouseEnter = function (imageId, evt) {
    let bounds = evt.target.getBoundingClientRect();
    let y = evt.clientY - bounds.top;
    setCoordinateY(y);
    setTargetImgId(imageId);
    setIsShowDetails(true);
  };

  const onImgContainerCliked = function (image) {
    toggleModal();
    addModalContent(
      <ImageModal
        image={image}
        currentIndex={currentIndex}
        allImages={allImages}
      />
    );
  };
  let completeItemClass = 'item' + Math.ceil(image.height / image.width);

  return (
    <div
      key={image.id}
      className={`${Style['imgContainer']} ${Style[completeItemClass]}`}
      onMouseEnter={(evt) => onMouseEnter(image['id'], evt)}
      onMouseLeave={() => setIsShowDetails(false)}
      style={{
        backgroundImage: `url(${image.urls.small})`,
      }}
      onClick={() => onImgContainerCliked(image)}
    >
      <img src={image.urls.small} className={Style.img} />

      {isShowDetails && targetImgId === image.id ? (
        <ImageDetails image={image} coordinateY={coordinateY} />
      ) : (
        ''
      )}
    </div>
  );
};
