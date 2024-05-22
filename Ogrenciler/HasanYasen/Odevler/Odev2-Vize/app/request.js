const ui = new UI()

class Request {
    static async get(url) {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            return data

        } else {
            throw new Error("Get request failed")
        }
    }
    static async post(url, data) {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error("Post request failed")
        }
    }
    static async put(url, data) {
        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error("Put request failed")
        }
    }
    static async delete(url) {
        const response = await fetch(url, {
            method: "DELETE"
        })
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            throw new Error("Delete request failed")
        }
    }
}
Request.get(url).then((books) => UI.showBooks(books))