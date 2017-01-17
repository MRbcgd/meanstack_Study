var express=require('express');
//body-parser : express가 post요청에 자동으로 json형태로 읽기 위해 필요함
var bodyParser=require('body-parser');

var app=express();
var Post=require('./models/posts')
app.use(bodyParser.json())

app.get('/api/posts',function(req,res){
  Post.find(function(err,posts){
    if(err) { return next(err) }
    res.json(posts)
  })
})
app.post('/api/posts',function(req,res,next){
  var post=new Post({
    username:req.body.username,
    body:req.body.body
  })
  post.save(function(err,post){
    if(err) { return next(err) }
    res.json(201,post)
  })
})
app.listen(3000,function(){
  console.log('Connected 3000 port!');
});
