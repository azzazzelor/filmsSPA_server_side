const reques = () => {
    // metods from servece: get, post, delete....
    return {
        get: getRequest
    };


    //function for GET requests
    function getRequest(url, params) {
        let fullUrl = url;

        if (params) {
            fullUrl = `?${jsonToSearchString(params)}`;
        }
        

        return executeRequest(fullUrl, 'GET');
    }

    function postRequest(url, params, body) {
        let fullUrl = url;

        if (params) {
            fullUrl = `?${jsonToSearchString(params)}`;
        }

        return executeRequest(fullUrl, 'GET', (body ? body : null));
    }

    //function for do request
    function executeRequest(url, type, body) {
        const options = {
            method: type,
            body: body
        };

        return fetch(url, options)
            .then(checkStatus)
            .then(parseJSON)
            .catch((error) => {
                console.log({url: url, method: type, error: error});
            });
    }

    //helper function to convert object to url params
    function jsonToSearchString(json) {
        const string = Object.keys(json).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(json[k]);
        }).join('&');

        return string;
    }

    //check response status
    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }

    //parse response from server
    function parseJSON(response) {
        return response.json()
    }
};

module.exports = reques();