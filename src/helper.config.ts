import moment from "moment";

//-------------HELPER SETTING--------------
export const convertDateFormat:any = (date:Date) => {
    return moment(date).format('DD MMM YYYY')
}
export const trimHighNumbers: any = (number:number) => {
    if (number >= 1000) {
        return (number/1000).toFixed(1)+'k'
    }
    return number
}
export const listOfRepoDetails: any = (item: any) => {
    return [
        { name: 'language', detail: item.language },
        { name: 'stars', detail: trimHighNumbers(item.stargazers_count) },
        { name: 'forks', detail: trimHighNumbers(item.forks) },
        { name: 'issues', detail: trimHighNumbers(item.open_issues) },
        { name: 'business_type', detail: item.owner.type },
        { name: 'privacy', detail: item.private }
    ]
}
export const listOfLinks: any = (item: any) => {
    return [
        { name: 'website', detail: item.homepage },
        { name: 'github_repo', detail: item.html_url }
    ]
}