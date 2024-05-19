function showInfos() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    let list = document.getElementById("row");

    if (this.status == 200) {
      const data = JSON.parse(this.responseText).slice(0, 20);
      console.log(data);
      data.map((data) => {
        //   img.innerHTML += `<img src="https://picsum.photos/id/${data.id}/100/100" alt="">`;
        list.innerHTML += `
		  
		 
		  <div class="col-8 my-2" id="inf"><h3>${data.title} </h3>

		  <p>${data.body} </p></div>
		  <div class="col-4 my-2  id="pic"> <img src="https://picsum.photos/id/${
        data.id + 50
      }/400/300" alt=""></div> `;
      });
    }
  };
  xhr.send();
}

showInfos();
