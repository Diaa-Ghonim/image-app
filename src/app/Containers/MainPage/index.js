import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../Components/Button';
import { BigSpinner } from '../../Components/Spinner';
import { ShowError } from '../../Components/ShowError';
import { getImages } from '../../../state/actions';
import { decode } from 'blurhash';
import Style from './style.module.scss';
import { DisplayImage } from '../../Components/DisplayImage';

const MainPage = () => {
  const dispatch = useDispatch();
  const { images, isLoading, error } = useSelector(({ images }) => images);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  if (error)
    return (
      <ShowError error={error} tryLoadingAgain={() => dispatch(getImages())} />
    );

  return (
    <div className={Style['container']}>
      <div className={Style['content']}>
        {images.length > 0 &&
          images.map((image, i) => {
            return (
              <DisplayImage
                image={image}
                key={image.id}
                currentIndex={i}
                allImages={images}
              />
            );
          })}
      </div>
      {isLoading ? <BigSpinner /> : ''}
      {images.length > 0 && (
        <div className={Style['loadmoreContainer']}>
          <Button
            onClickCallback={() => dispatch(getImages())}
            className={Style['loadmore']}
            text='loadmore'
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export { MainPage };
