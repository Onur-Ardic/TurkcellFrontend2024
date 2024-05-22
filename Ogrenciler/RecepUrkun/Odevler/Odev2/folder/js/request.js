class Request {
    static async get(baseUrl) {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            return data;
        } catch (err) {
            UI.ShowErrorMessage(err.message, 'danger')
        }
    }

    static async post(baseUrl, data) {
        try {
            const response = await fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            const responseData = await response.json();
            return responseData;
        } catch (err) {
            UI.ShowErrorMessage(err.message, 'danger')
        }
    }

    static async put(baseUrl, data) {
        try {
            const response = await fetch(baseUrl, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json;",
                },
            });
            const responseData = await response.json();
            return responseData;
        } catch (err) {
            UI.ShowErrorMessage(err.message, 'danger')
        }
    }

    static async delete(baseUrl) {
        try {
            const response = await fetch(baseUrl, {
                method: "DELETE",
            });
            const responseData = await response.json();
            return responseData;
        } catch (err) {
            UI.ShowErrorMessage(err.message, 'danger')
        }
    }
}