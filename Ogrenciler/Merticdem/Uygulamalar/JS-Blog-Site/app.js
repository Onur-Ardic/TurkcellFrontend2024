window.onload = function () {
  const xhrPost = new XMLHttpRequest();
  xhrPost.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhrPost.onload = function () {
    if (this.status === 200) {
      const posts = JSON.parse(this.responseText);
      const data = [];
      posts.slice(0, 20).forEach(function (post) {
        data.push(post);
      });
      console.log(data);
      return data;
    } else {
      console.error("Error: " + this.status);
    }
  };
  xhrPost.send();
};
// function getImage(callback) {
//   const xhrImage = new XMLHttpRequest();
//   xhrImage.open("GET", "https://picsum.photos/200", true);
//   xhrImage.onload = function () {
//     if (this.status === 200) {
//       const Image = this.responseURL;
//       callback(Image);
//     } else {
//       console.error("Error: " + this.status);
//     }
//   };
//   xhrImage.send();
// }

// getImage(function (image) {
//   console.log(image);
// });
