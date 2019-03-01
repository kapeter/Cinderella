import axios from "axios";

function fetch(url, params) {
    return axios({
        baseURL: "http://api.kapeter.com",
        url,
        params
    }).then(res => {
        return res.data
    })
}

export function fetchArticles(page = 1) {
    return fetch("/post", {
        category: 0,
        page
    });
}