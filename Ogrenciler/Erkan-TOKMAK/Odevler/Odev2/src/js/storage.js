class Request {
    async get(url){
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Bir hata oluştu.Sunucuya Bağlanılamadı')
        }
        const data = await response.json();
        return data;
    }
    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json;'
            }
        })
        if(!response.ok){
            throw new Error('Bir hata oluştu.Sunucuya Bağlanılamadı.')
        }
        const responseData = await response.json();
        return responseData;
    }
    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json;'
            }
        })
        if(!response.ok){
            throw new Error('Bir hata oluştu.Sunucuya Bağlanılamadı.')
        }
        const responseData = await response.json();
        return responseData;
    }
    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE'
        })
        if(!response.ok){
            throw new Error('Bir hata oluştu.Sunucuya Bağlanılamadı')
        }
        const responseData = await response.json();
        return responseData;
    }
}