class Request {
  static async getAllData(url) {
    const response = await fetch(url)
    const data = await response.json()
    data.forEach((card) => {
      console.log(card)
    })
  }
}

Request.getAllData('https://jsonplaceholder.typicode.com/posts?_limit=20')
