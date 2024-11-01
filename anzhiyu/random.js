var posts=["2024/11/01/hello-world/","2024/11/01/新文章01/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };