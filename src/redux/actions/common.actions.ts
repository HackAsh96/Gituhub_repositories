import { FETCH_REQUEST, FETCH_FAILURE, FetchActionTypes, FETCH_SUCCESS } from "../types"
import { ActionCreator } from "redux";

export const request: ActionCreator<FetchActionTypes> = () => {
    return { type: FETCH_REQUEST };
}
export const success: ActionCreator<FetchActionTypes> = () => {
    return {type:FETCH_SUCCESS}
}
export const failure: ActionCreator<FetchActionTypes> = (error: any) => {
    return { type: FETCH_FAILURE, payload: error };
}