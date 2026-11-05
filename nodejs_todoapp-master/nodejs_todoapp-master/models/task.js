import mongoose, { Mongoose } from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const categorySchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  creationAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now }
});
const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: true },
  creationAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
  category: { type: categorySchema, required: true }
});

const productSchema2 = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    description: "Unique identifier for the product"
  },
  title: {
    type: String,
    required: true,
    description: "Name of the product"
  },
  price: {
    type: Number,
    required: true,
    description: "Price of the product"
  },
  description: {
    type: String,
    required: true,
    description: "Description of the product"
  },
  category: {
    type: String,

    description: "Category the product belongs to"
  },
  image: {
    type: String,
    required: true,
    description: "URL of the product image"
  },
  quantity:{
    type:String,

    description:"quantity no"
  },
  rating: {
    rate: {
      type: Number,

      description: "Average rating of the product"
    },
    count: {
      type: Number,
      
      description: "Number of ratings"
    }
  }
});
const Img=new mongoose.Schema({
  image:String,
},
{
  collection:"ImageDetails"
})
export const img2 = mongoose.model('img1', Img);

export const data = mongoose.model('Data', productSchema);

export const data1 = mongoose.model('Data1', productSchema2);
export const Task = mongoose.model("Task", schema);
