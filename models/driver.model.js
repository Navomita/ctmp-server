import mongoose, { model, Schema } from "mongoose";


export const driverSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'user',
        required:true ,
        unique: [true , 'driver alrady exist !']
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        maxLength:10
    },
    typeOfCar:[
       {
        name:{
            type:String , 
            maxLength: [60, 'name should be in 60 latter'],
            trim: true
        },
        exprence:{
           type:Number , 
           default:0
        }
       }
    ],
    isOwnCar: {
        type:Boolean,
        default:false
    },
    totalExprience:{
        type:Number 
    },
    car:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'car' ,
        default:null
    },
    isBooked:{
        type:Boolean ,
        default:false
    },
    

} , { timestamps: true})

export const Drivers = model('driver' , driverSchema)