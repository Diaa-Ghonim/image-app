import { createReducer } from '../../../utils/createReducer';
import { handlers } from './handlers';

const initialState = {
  images: [],
  page: 1,
  isLoading: false,
  error: null,
};

export const imagesReducer = createReducer(initialState, handlers);
console.log(imagesReducer);
