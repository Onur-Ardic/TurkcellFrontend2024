class Request{
    static async get(url){
        try{
            const response = await fetch(url);
            if(!response.ok)
                throw new Error("Kitap bulunamadı.")
            const data = await response.json();
            return data;
        } catch (err) {
          console.log(err.message);
        }
    }
  }
  
  export default Request;