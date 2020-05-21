const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const data = require('./data.json')

app.use(express.json());
app.set('views' , path.join(__dirname , 'views'));
app.set(`view engine` , 'pug')
app.use(express.static(__dirname + '/public'));


app.get('/ping' , (req , res)=>{
  res.send("pong")
})

app.get('/' , (req , res)=>{
  res.render("index" , {
    ...data.myInfo,
    "projects": data.projects
  })
})

app.get('/projects/:id' , (req , res)=>{
  // console.log(req.params.id)
  res.render("project" , {
    ...data.myInfo,
    ...data.projects[req.params.id - 1]
  })
})
app.get('/about' , (req , res)=>{
  res.render("about" ,{
    ...data.myInfo
  })
})


app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}!`);
});
