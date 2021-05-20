import moment from "moment"
import { ImageSourcePropType } from "react-native"

export const GET_ALL_REPOS = "GET_ALL_REPOS"

interface OrgInterface{
    id: number
    login:string
    created_at:moment.Moment
    avatar:ImageSourcePropType
}
export interface ReposInterface {
    id: number
    owner: OrgInterface
    full_name: string
    description: string
    forks: number
    stars: number
    open_issues: number
    language:string
}

interface GetReposAction {
    type: typeof GET_ALL_REPOS,
    payload: ReposInterface[]
}



export type ReposActionTypes = GetReposAction