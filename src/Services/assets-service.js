export const assetsService = {
    getAllVacancies,
    getVacancyById,
    getAllNews,
    getNewsById,
    sendFeedback,
    getFeedbacks
};

const _apiURL = "https://hr-portal-backend.herokuapp.com/api";

function getAllVacancies() {
    const requsetOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${_apiURL}/vacan/vacancy/all`, requsetOptions)
        .then(handleResponse)
        .then(vacanciesList => {
            return JSON.parse(vacanciesList);
        });
}

function getVacancyById(id) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${_apiURL}/vacan/vacancy?vacancyID=${id}`, requestOptions)
        .then(handleResponse)
        .then(vacancyData => {
            return JSON.parse(vacancyData);
        })
}

function getAllNews() {
    const requsetOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${_apiURL}/news/news/all`, requsetOptions)
        .then(handleResponse)
        .then(newsList => {
            return JSON.parse(newsList);
        });
}

function getNewsById(id) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${_apiURL}/news/news?post=${id}`, requestOptions)
        .then(handleResponse)
        .then(postData => {
            console.log(JSON.parse(postData));
            return JSON.parse(postData);
        })
}
function sendFeedback(userId, from, text) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({userId, from, text}),
        redirect: 'follow'
    };

    return fetch(`${_apiURL}/user/feedbacks`, requestOptions).then(handleResponse);

}
function getFeedbacks(id){
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`${_apiURL}/user/feedbacks?userId=${id}`, requestOptions)
        .then(handleResponse)
        .then(feedbacksList => {
            return JSON.parse(feedbacksList);
        })
}


function handleResponse(response) {
    return response.text()
        .then(data => {
            if ( !response.ok) {
                window.location.reload();
                const error = data.toString();

                return Promise.reject(error);
            }
            return data;
        })
}