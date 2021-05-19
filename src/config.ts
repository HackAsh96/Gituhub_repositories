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