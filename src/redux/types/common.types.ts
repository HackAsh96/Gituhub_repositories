export const FETCH_REQUEST = "FETCH_REQUEST"
export const FETCH_FAILURE = "FETCH_FAILURE"
export const FETCH_SUCCESS=  "FETCH_SUCCESS"

export interface RefreshInterface {
    loading: boolean
}
interface FetchRequestAction  {
    type: typeof FETCH_REQUEST
}
interface FetchSuccessAction{
    type: typeof FETCH_SUCCESS
}
interface FetchFailureAction  {
    type: typeof FETCH_FAILURE,
    payload: any
}

export type FetchActionTypes = FetchRequestAction | FetchFailureAction |FetchSuccessAction 