var posts=["2024/11/03/新文章/","2024/11/04/基于C-的简单远程注册功能实现/","2024/11/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };