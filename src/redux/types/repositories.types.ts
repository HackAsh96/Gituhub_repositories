import moment from "moment"
import { ImageSourcePropType } from "react-native"

export const GET_ALL_REPOS = "GET_ALL_REPOS"

interface OrgInterface{
    id:number
    name: string
    description: string
    created_at:moment.Moment
    avatar:ImageSourcePropType
}
export interface ReposInterface {
    id: number
    org: OrgInterface
    forks: number
    stars: number
    issues: number
    language:string
}

interface GetReposAction {
    type: typeof GET_ALL_REPOS,
    payload: ReposInterface[]
}



export type ReposActionTypes = GetReposAction