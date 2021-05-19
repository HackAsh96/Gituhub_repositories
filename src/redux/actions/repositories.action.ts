import { GET_ALL_REPOS,ReposInterface, ReposActionTypes } from '../types';
import { request, failure, success } from './common.actions';
import { ActionCreator } from 'redux';
import { githubService } from '../../services/repositories.service';

const getAllReposSuccess: ActionCreator<ReposActionTypes> = (repos: ReposInterface[]) => {
  return { type: GET_ALL_REPOS, payload: repos };
}

export const getRepositories=():any=> {
  return (dispatch:any) => {
      dispatch(request());
      try {
          return githubService
          .getAllRepos()
              .then((response: any) => {
                dispatch(getAllReposSuccess(response.data.items))
                dispatch(success())
              }, (error: any) => dispatch(failure(error)))
      }
      catch (error) {
          console.error(error)
      }
  }
}

// export function likePost({ postId, userId }: { postId: String, userId: String }) {
//   return dispatch => {
//     dispatch(request());
//     return feedService.likePost({ postId, userId })
//       .then(
//         response => {
//           dispatch(likePostSuccess(response))
//         },
//         error => {
//           dispatch(failure('Server error.'))
//         })
//   }
// }