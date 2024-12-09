const  mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:  {
        type: String,
        required: true,
        minLength:4,
        maxLength:50,
    },
    lastName: {
        type: String
    },
    emailId:  {
        type : String,
        required: true,
        lowercase:true,
        unique:true,//for non redundency of emailss
        trim:true,
    
    },
    password:  {
        type : String,
        required: true,
    }, 
    age :  {
        type : Number,
        min: 18,
    },
    gender :   {
        type : String,
        validate(value){
            if(!["male","female","others"].includes(values)){
                throw new Error("Gender data is not valid");

            }
        },
    },
    photoUrl :  {
        type : String,
        default:"https://th.bing.com/th/id/OIP.16mKSaqxjNor68qMZti0kgHaHT?rs=1&pid=ImgDetMain"
    },
    about :  {
        type : String,
        default: "This is the default about of the user ",
    },
    skills:  {
        type :[String],
    },

   
},

{
    timestamps: true,
}
);
// const User= mongoose.model("User",userSchema);
// module.exports = userModel;
module.exports = mongoose.model("User",userSchema);