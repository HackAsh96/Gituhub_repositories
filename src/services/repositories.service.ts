import axios from 'axios';


const API_URL = 'https://api.github.com/search/repositories?q=stars:%3E1&s=stars';

const getAllRepos=()=>{
    return axios({
        url:API_URL, 
        method: 'GET'
    }).catch(error => {
        console.log(error)
    })
}

export const githubService = {
    getAllRepos
}