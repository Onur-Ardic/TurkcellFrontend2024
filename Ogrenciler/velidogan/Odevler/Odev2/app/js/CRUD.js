class Request{
    static async get(url,sort){
        try{
            const response = await fetch(url + sort);
            if(!response.ok)
                throw new Error("Kitap bulunamadı.")
            const data = await response.json();
            return data;
        } catch (err) {
            ui.error(err.message);
        }
    }
    static async post(url,data){
        try {
            const response = await fetch(url,{
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                "Content-type": "application/json;",
                }
            });
            if(!response.ok){
                throw new Error("Kitap Eklenemedi.")
            }

        } catch (err) {
            ui.error(err.message);
        }
    }
    static async put(url,data,id){
        try {
            const response = await fetch(url + "/" + id, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                "Content-type": "application/json;",
                }
            });
            if(!response.ok){
                e.preventDefault()
                throw new Error("Kitap Düzenlenemedi.")
            }
        } catch (err) {
            ui.error(err.message);
        }
    }
    static async delete(url,id){
        try {
            const response = await fetch(url + "/" + id,{
                method: "DELETE"
            }); 
            if(!response.ok){
                throw new Error("Kitap Silinemedi.")
            }
        } catch (err) {
            ui.error(err.message);
        }       
    }
}