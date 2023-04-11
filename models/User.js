import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;
const messageSchema = new mongoose.Schema({
    reviewBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    texte:{
        type: String,
        require: ""
    }
  },{
    timestamps: true,
  });
 const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:"Please enter you name"
    },
    email:{
        type: String,
        required : "Please enter your email",
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default: "user",
    },
    image:{
        type: String,
        default:"https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    emailVerified:{
        type: Boolean,
        default: false,
    },
    defaultPaymentMethod:{
        type: String,
        default: ""
    },
    groupe:[{
        description :{type: String,
         default: ""
     },
     member:{
         type: Number,
         default:""
     },
 
     }],
    address:[{
        firstName:{
            type: String,
        },
        lastName:{
            type: String,
        },
        phoneNumber1:{
            type: String,
        },
        phoneNumber2:{
            type: String,
        },
        address1:{
            type: String,
        },
        city:{
            type: String,
        },
        state:{
            type: String,
        },
        country:{
            type: String,
        },
        active:{
            type: Boolean,
            default: false,
        },

    }],
    wishlist: [
        {
          product: {
            type: ObjectId,
            ref: "Product",
          },
          style: {
            type: String,
          },
        },
      ],
 },
 {
    timestamps: true,
 }
 );
 const User = mongoose.models.User || mongoose.model('User', userSchema);
 export default User;