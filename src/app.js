const express=require('express');
const exp=express();
const collection=require('./models/models');
const path=require('path'); 
const port=process.env.PORT || 3000;

// const path1=path.join(__dirname,'../views');   
// exp.use(express.static(path1));     
// exp.set('view engine','hbs');   

const path1=path.join(__dirname,'../views/');
exp.use(express.static(path1));


// exp.set("views", path.join(__dirname, "../views")); 
     
exp.get("/",(req,res)=>{ 
       res.sendFile(path.join(__dirname,'../views/web.html'));        
});      
       
exp.listen(port,()=>{
    console.log("success...");
});
         