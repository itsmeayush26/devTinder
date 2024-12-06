const express= require('express');
const app = express();

//because of order post,get and delete will return hehehehhe as a output .......u can ren and test it 

//  app.use("/user", (req,res) => {
//     res.send ("hehehehhe")
// });


//this will only handle get call to /user -> lecture 4 HTTPS topic 
app.get("/user", (req,res) => {
    res.send ({firstName:"Ayush ", lastName:"Singh"})
});

app.post("/user", (req,res) => {
   //saving data to db 
    res.send ("Data successfully send to the database!")
});

app.delete("/user", (req,res) => {
    res.send ("Deleted succesfully")
});


//order of code matters a lot /hello vs /hello/2 routes interchange and run to see the result 
//this will match all the http method API calls to /test-> lecture 4 HTTPS topic 
app.use("/hello",(req,res) =>{ 
    res.send ("hello hello hello! ");
});
//put it above otherwise it will show hello hello hello! at route /hello/2 ,,because its in the begining 

app.use("/hello/2",(req,res) =>{ 
    res.send ("khul ja simsim! ");
});


app.use("/namste",(req,res) =>{ 
    res.send ("hello mr AKS");
});

app.use("/ayush",(req,res) =>{ 
    res.send ("hello mr Ayush Singh");
});


//test used is =>router 
app.use("/test",(req,res) =>{ 
    res.send ("hello from the server ");
});
app.listen(3000, () =>{
    console.log("server is successfully listenning on port 3000...");
});

