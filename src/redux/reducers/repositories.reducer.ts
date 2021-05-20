import {ReposInterface, ReposActionTypes, GET_ALL_REPOS } from '../types';

interface ReposState {
  allRepos: ReposInterface[]
}

const initialState: ReposState = {
  allRepos: []
};

export default function reducer(state: ReposState = initialState, action: ReposActionTypes): ReposState {
  switch (action.type) {
    case GET_ALL_REPOS:
      return Object.assign({}, state, {
        allRepos: action.payload
      })
    default:
      return state
  }
};