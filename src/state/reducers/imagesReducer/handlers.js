import { GET_IMAGES } from '../../actionTypes';
import { handleHttpError } from '../../../utils/handleHttpError';
const handlers = {
  [GET_IMAGES.LOADING]: (state) => {
    return {
      ...state,
      isLoading: true,
    };
  },

  [GET_IMAGES.SUCCESS]: (state, { images }) => {
    return {
      ...state,
      isLoading: false,
      error: null,
      images: [...state.images, ...images],
      page: state.page + 1,
    };
  },

  [GET_IMAGES.FAILURE]: (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: handleHttpError(error),
    };
  },
};

export { handlers };
