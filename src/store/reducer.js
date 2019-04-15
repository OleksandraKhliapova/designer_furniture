import { getProduct } from '../apis';

const initialState = {
  products: [],
  isLoading: false
};

const FETCH_PRODUCT = 'FETCH_PRODUCT';
const LOADIND_PRODUCT = 'LOADIND_PRODUCT';
export function fetchTrendingProduct() {
  return dispatch => {
    dispatch({ type: LOADIND_PRODUCT});
    getProduct().then(data => {
      dispatch({ type: FETCH_PRODUCT, data: data.data })
    })
  }
}

export default function reducer (state=initialState, action) {
  const { type, data } = action;

  switch (type) {
    case LOADIND_PRODUCT:
      return {
        ...state,
        isLoading: true
      }

    case FETCH_PRODUCT: 
      return {
        ...state,
        products: data,
        isLoading: false
      }

    default:
      return state
  }
}