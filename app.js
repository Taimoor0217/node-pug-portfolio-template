const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.set('views' , path.join(__dirname , 'views'));
app.set(`view engine` , 'pug')




app.get('/ping' , (req , res)=>{
  res.send("pong")
})

app.get('/' , (req , res)=>{
  res.render("index" , {
    title: "My Portfolio"
  })
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}!`);
});
