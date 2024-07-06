class Request {
    static async get(url) {
        try {
            const response = await fetch(url);
            if (!response.ok)
                throw new Error("Data not found.");
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err.message);
        }
    }

    static async post(url, data) {
        try {
            console.log("Posting data:", data);
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                }
            });
            if (!response.ok) {
                throw new Error("Failed to add data.");
            }
            const newBook = await response.json();
            return newBook;
        } catch (err) {
            console.log(err.message);
        }
    }

    static async put(url, data) {
        try {
            const response = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                }
            });
            if (!response.ok) {
                throw new Error("Failed to update data.");
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    static async remove(url) {
        try {
            const response = await fetch(url, {
                method: "DELETE"
            });
            if (!response.ok) {
                throw new Error("Failed to delete data.");
            }
        } catch (err) {
            console.log(err.message);
        }
    }
}

export default Request;
