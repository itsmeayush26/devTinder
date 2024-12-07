const express= require('express');
const app = express();


//lecture  ->>05
//one route can have multiple route handler lecture->>05

// first one response!! will be output as js is single threaded language 
app.use("/user",(req,res,next) =>{
    console.log("handling the route user!!");
    // res.send("response!!");
    next(); ///  ->> it calls the next req,response
    // res.send("response!!");
},



(req,res,next) =>{  ///without adding next here it will not work next(),
console.log("handling the route user 2!!");
next();
res.send("2nd response!!");

},
// the 3rd and 4th will never be called and taken as output, as next() is calling 2nd response !!
(req,res,next) =>{
    console.log("handling the route user 3!!");
    //res.send("3rd response!!");
    next();
    },

    

    (req,res) =>{
    console.log("handling the route user 4!!");
   // next(),     //it will through error as nothing on next 
    res.send("4th response!!");

});

//app,use("/route",[rh1,  rh2, rh3], rh4, rh5)  ///you can pass in btw array also in pllace of first brac() 





//because of order post,get and delete will return hehehehhe as a output .......u can ren and test it 

//  app.use("/user", (req,res) => {
//     res.send ("hehehehhe")
// });


// query vs params

// app.get("/user", (req,res) => {
//     console.log (req.query);
//     res.send ({firstName:"Ayush ", lastName:"Singh"})
// });

/*//this will only handle get call to /user -> lecture 4 HTTPS topic 
app.get("/user/:userId/:name/:password", (req,res) => {       //<-params
    console.log (req.params);
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
*/


app.listen(3000, () =>{
    console.log("server is successfully listenning on port 3000...");
});
