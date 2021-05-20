import moment from "moment"
import { ImageSourcePropType } from "react-native"

export const ADD_FAVORITE_REPO = "ADD_FAVORITE_REPO"
export const REMOVE_FAVORITE_REPO = "REMOVE_FAVORITE_REPO"

interface OrgInterface{
    id: number
    login:string
    created_at:moment.Moment
    avatar:ImageSourcePropType
}
export interface FavoriteRepoInterface {
    id: number
    owner: OrgInterface
    full_name: string
    description: string
    forks: number
    stars: number
    open_issues: number
    language:string
}

interface AddFavoriteRepositoryAction {
    type: typeof ADD_FAVORITE_REPO,
    payload: FavoriteRepoInterface
}
interface RemoveFavoriteRepositoryAction{
    type: typeof REMOVE_FAVORITE_REPO,
    payload: number|string
}



export type FavoriteRepoActionTypes = AddFavoriteRepositoryAction|RemoveFavoriteRepositoryAction