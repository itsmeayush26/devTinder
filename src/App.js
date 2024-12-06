const express= require('express');
const app = express();



app.use("/namste",(req,res) =>{ 
    res.send ("hello mr AKS");
});

app.use("/ayush",(req,res) =>{ 
    res.send ("hello mr Ayush Singh");
});

app.use("/hello",(req,res) =>{ 
    res.send ("hello hello hello! ");
});

//test used is =>router 
app.use("/test",(req,res) =>{ 
    res.send ("hello from the server ");
});
app.listen(3000, () =>{
    console.log("server is successfully listenning on port 3000...");
});

