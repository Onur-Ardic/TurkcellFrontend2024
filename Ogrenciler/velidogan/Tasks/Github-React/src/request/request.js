class Request{
    static async get(url){
        try{
            const response = await fetch(url);
            if(!response.ok)
                throw new Error("Kullanıcı bulunamadı.")
            const data = await response.json();
            return data;
        } catch (err) {
          return err;
        }
    }
  }
  
  export default Request;