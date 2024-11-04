var posts=["2024/11/03/新文章/","2024/11/04/基于C-的简单远程注册功能实现/","2024/11/04/在C-中操作SQLserver数据库/","2024/11/04/在C-中通过QQ邮箱SMTP服务发送邮件/","2024/11/04/在C-中通过url获取页面HTML文档/","2024/11/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };