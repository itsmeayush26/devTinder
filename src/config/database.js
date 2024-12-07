const mongoose = require("mongoose");
const connectDB = async()=>{
    await mongoose.connect(
        "mongodb+srv://ayushsingh:o9GfpGbRDDPD2mwl@devtinder.yv6r8.mongodb.net/devtinder"
   
);
};


// connectDB().then(() =>{
//     console.log ("database is connected successfully")

// })
// .catch(err=>{
//     console.log("database cannot be connected ")

// });

module.exports = connectDB;
