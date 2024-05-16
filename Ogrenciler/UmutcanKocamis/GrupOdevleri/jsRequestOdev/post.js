class Post {
  static createPost(title, body, random) {
    return `
    <div class="col-4 ">
      <div class="card mb-3" style="height:45rem;">
        <img src="https://picsum.photos/id/${random}/500/500" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <p class="card-text">${body}</p>
        </div>
      </div>
   </div>`;
  }
}
