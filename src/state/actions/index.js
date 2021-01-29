import { GET_IMAGES } from '../actionTypes';
import { createAction } from '../../utils/createAtion.helpers';

const getImages = createAction(GET_IMAGES.ACTION);
const getImagesLoading = createAction(GET_IMAGES.LOADING);
const getImagesSuccess = createAction(GET_IMAGES.SUCCESS, 'images');
const getImagesFailure = createAction(GET_IMAGES.FAILURE, 'error');

export { getImages, getImagesLoading, getImagesSuccess, getImagesFailure };
