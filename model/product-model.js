const mongoose = require('mongoose');
const { Schema } = mongoose;
 
const productSchema = new Schema({
    title: {
      type: String,
      required: true, 
      unique: true
    } ,
    description: String,
    price: {
      type: Number, 
      min:[0,'wrong price'],
      required: true
    },
    discountPercentage: {type: Number, min:[0,'wrong min discount'], max:[50,'wrong max discount']},
    rating: {
      type: Number, 
      min:[0,'wrong min rating'], 
      max:[5,'wrong max rating']
    },
    brand: {type: String,required: true},
    category: {type: String, required: true},
    thumbnail: {type: String, required: true},
    images: [ String ]
  });
  
exports.Product = mongoose.model('Product', productSchema);































// //Schema

// const mongoose = require('mongoose');
// // const ObjectId=mongoose.Types.ObjectId;
// const { Schema } = mongoose;

// const productSchema = new Schema({
//     title: String, //title: {type: String}, // String is shorthand for {type: String}
//     description: String,
//     price: Number,
//     discountPercentage: String,
//     rating: Number,
//     brand: String,
//     category: String,
//     thumbnail: String,
//     images: [String],
//   });
// //                                  //always Product singular but after that auto chamge to pular
// // //   const Product = mongoose.model('Product', productSchema);

// exports.Product = mongoose.model('Product', productSchema);