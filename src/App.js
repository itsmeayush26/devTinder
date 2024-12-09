const express= require('express');
const connectDB =require("./config/database");
const User =require ("./models/user");

const app = express();

app.use(express.json()); 




app.post("/signup",async (req,res)=>{
   });

//Get user by email
   app.get("/user",async(req,res)=>{ 
    const userEmail = req.body.emailId;
try{
    console.log (userEmail);
    const user =  await User.findOne({emailId: userEmail}); 
    if (!user){
        res.status(400).send("user not found");
    }else {
        res.send (user); 
    }
//    const user =  await User.find({emailId: userEmail});  // <---filter to find the person with  particular data 
//     if (users.length === 0){
//         res.status(400).send("user not found");

//     }else{
//     res.send (users);
//     }
}catch(err){ 
    res.status(400).send("something went wrong!!")
}
   });  

//Feed API -GET/feed -get all the users from db 
app.get("/feed",async(req,res)=>{
    try{
        const users =await User.find({});
        res.send(users);
    }
catch(err){
    res.status(400).send("something went wrong!!")
}

});






// app.post("/signup",async (req,res)=>{
// console.log (req.body);});

    


//    // creating a new instance of the user models        ......otherwise copy paste the above code agin agian for every user 
//     const user = new User(req.body);  //({  //(userobj);
//     // const  userobj = {
//         firstName: "shasii ",
//         lastName : "singh",
//         emailId  :"suku.singhayush@gmail.com",
//         password : "sukuh@260320",
//         //_id: "675499abf18ed870e555aec899", you can add id of your choice but dont do it its a bad practice let mongodb make unique ids 

//  });
// try{
// await user.save(); //saves in the db
// res.send("user added successfully");
// }catch(err){
//     res.status(400).send("error saving the user :"+ err .message);
// }
// //});


connectDB().then(() =>{
    console.log ("database is connected successfully")

})
.catch(err=>{
    console.log("database cannot be connected ")

});
 



/*
app.get("/getUserData", (req,res) =>{
   try{
    //logic of db calls and get user data 

   throw new error("dhskfh")
    res.send ("user Data Sent ");
   }catch(err){
    res.status (500).send("some error contact support team")

  }
});

//handling error using -> middlewares 
app.use("/",(err,req,res,next,)=>{  ///order is imp "err" should be in front as always 
    if (err){
        //log your error 
        res.status(500).send("something went wrong ");
    }

});
*/


/*
const {adminAuth, userAuth} = require("./middlewares/auth");

//handle Auth Middleware for only Get requests GET,POST


app.use ("/admin", adminAuth);
//app.use ("/user", userAuth);
/*
app.use("/admin",  // || app.all("/admin")   see differences btw use and all
(req,res,next) => {
    console.log ("admin auth is getting checked !!")
    const token ="xyz";
    const isAdminAuthorized = token ==="xyz";
    if  (!isAdminAuthorized){
        res.status(401).send("unauthorized request")
       
    }
    else {
        next();
    }
});

*/
/*
//in post we do no req middlewares ->dummy auth middleware 
app.post("/user/login",(req,res)=>{
    res.send ("User logged in successfully");
});


app.get("/admin/getAllData", (req,res) =>{
   
        res.send ("All Data Sent ");
});

app.get("/admin/deleteUser", (req,res) =>{
   
        res.send ("Deleted a user");
});
 // here ,,,,admin auth will not be checked it will only check for something starting with /admin 
app.get("/User", userAuth, (req,res) =>{
   
    res.send ("user data sent ");
});

*/










//above we have make the code look simple the same below code 
/*
app.get("/admin/getAllData", (req,res) =>{
    // logic of checking if the request is authorized
    const token ="xyzabcdjfhuifgh";
    const isAdminAuthorized = token ==="xyz";
    if  (isAdminAuthorized){
        res.send ("All Data Sent ");
       
    }
    else {
        res.status(401).send("unauthorized request");
    }

});

app.get("/admin/deleteUser", (req,res) =>{
    // logic of checking if the request is authorized
    const token ="xyzabcdjfhuifgh";
    const isAdminAuthorized = token ==="xyz";
    if  (isAdminAuthorized){
        res.send ("Deleted a user");
       
    }
    else {
        res.status(401).send("unauthorized request");
    }

});
*/














/*
//midlewares 
//GET /users => Its checks all the app.xxx("matching route ") functions 

app.use("/",(req,res,next) => {
    //res.send("handling /route");
    next(),

});

 app.get(
    "/user",  
    (req,res,next) =>{
    console.log("handling /user route");
    next();
    },
    (req,res) =>{
        res.send("2nd route handler");
        // next();
    }, 
    (req,res,) =>{
    res.send("2nd route handler");
              
}),

*/






/*app.get(
"/user",   (req,res,next) =>{
  console.log("handling the route user !!");    next();
  },    
  (req,res,) =>{
  console.log("handling the route user2 !!");
     res.send("response2!!")
}),
*/












//lecture  ->>05
//one route can have multiple route handler lecture->>05

// first one response!! will be output as js is single threaded language 
/*app.use("/user",(req,res,next) =>{
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

*/

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
