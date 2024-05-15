class uı {
  static cardFunction(title, text, id) {
    let div = document.createElement('div')
    div.classList.add('card')

    let imgDiv = document.createElement('img')
    imgDiv.classList.add('card-img', 'rounded-bottom-0')

    imgDiv.src = `https://picsum.photos/id/${id}/400/400`

    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    let cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = title

    let cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.innerText = text

    div.appendChild(imgDiv)
    div.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)

    return div
  }
}

class blog {
  static blogCard() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
    xhr.onload = function () {
      let list = document.querySelector('.card-wrapper')
      if (this.status === 200) {
        const data = JSON.parse(this.responseText)
        data.slice(0, 20).forEach((blog) => {
          let div = uı.cardFunction(blog.title, blog.body, blog.id)
          list.appendChild(div)
        })
      } else {
        console.log('Bir hata oluştu, veriler alınamadı.')
      }
    }
    xhr.send()
  }
}

blog.blogCard()
