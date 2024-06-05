class Request{
    static async get(url){
        try{
            const response = await fetch(url);
            if(!response.ok)
                throw new Error("Görev bulunamadı.")
            const data = await response.json();
            return data;
        } catch (err) {
          console.log(err.message);
        }
    }
    static async post(url,data){
        try {
            const response = await fetch(url,{
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                "Content-type": "application/json",
                }
            })
            if(!response.ok){
                throw new Error("Görev Eklenemedi.")
            }
  
        } catch (err) {
          console.log(err.message);
        }
    }
    static async put(url,data){
        try {
            const response = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                "Content-type": "application/json",
                }
            })
            if(!response.ok){
                throw new Error("Görev Düzenlenemedi.")
            }
        } catch (err) {
          console.log(err.message);
        }
    }
    static async delete(url){
        try {
            const response = await fetch(url,{
                method: "DELETE"
            });
            if(!response.ok){
                throw new Error("Görev Silinemedi.")
            }
        } catch (err) {
            console.log(err.message);
        }       
    }
  }
  
  export default Request;