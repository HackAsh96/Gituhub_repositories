import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FetchActionTypes,
    FETCH_FAILURE
} from '../types/common.types'

interface RefreshAPI {
  isLoading: boolean
}

const initialState: RefreshAPI = {
  isLoading:false
};

export default function reducer(state: RefreshAPI = initialState, action: FetchActionTypes): RefreshAPI {
  switch (action.type) {
      case FETCH_REQUEST: 
          return Object.assign({}, state, {
              isLoading:true
          })
    case FETCH_SUCCESS: 
          return Object.assign({}, state, {
              isLoading:false
          })
      case FETCH_FAILURE: 
          return Object.assign({}, state, {
              isLoading:false
          })
    default:
      return state
  }
};