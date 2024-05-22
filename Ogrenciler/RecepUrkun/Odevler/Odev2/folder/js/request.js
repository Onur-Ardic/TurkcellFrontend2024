class Request {
    static async get(baseUrl) {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            return data;
        } catch (err) {
            throw new Error("Veri alınamadı.");
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
            throw new Error("Hata Alındı.");
        }
    }

    static async put(baseUrl, data) {
        console.log(data)
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
            throw new Error("Hata Alındı.");
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
            throw new Error("Hata Alındı.");
        }
    }
}