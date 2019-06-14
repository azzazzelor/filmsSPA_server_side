const reques = () => {
    return {
        get: getRequest
    };

    function getRequest(url, params, body) {
        let fullUrl = url;

        if (params) {
            fullUrl = `?${jsonToSearchString(params)}`;
        }

        return executeRequest(fullUrl, 'GET', (body ? body : null));
    }

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

    function jsonToSearchString(json) {
        const string = Object.keys(json).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(json[k]);
        }).join('&');

        return string;
    }

    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }

    function parseJSON(response) {
        return response.json()
    }
};

module.exports = reques();