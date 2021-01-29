import React, { useState, useCallback } from 'react';
import Style from './style.module.scss';

export const ImageDetails = ({ image, coordinateY }) => {
  const [height, setHeight] = useState(0);
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);
  const handleCoordinateY = function () {
    let top = coordinateY;
    if (coordinateY > height) top -= height + 10;
    if (coordinateY === 0) top = 10;
    return { top };
  };

  return (
    <div
      ref={measuredRef}
      className={Style['image-details-container']}
      style={{
        top: handleCoordinateY().top,
        left: 10,
        right: 10,
      }}
    >
      <p>
        {' '}
        <span>description:</span> {image.alt_description}
      </p>
      <p>
        {' '}
        <span>created_at:</span> {image.created_at}
      </p>
    </div>
  );
};
