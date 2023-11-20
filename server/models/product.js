const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  Owner: {
    type: Schema.Types.ObjectId,
    ref: 'Owner',
  },
  title: String,
  description: String,
  price: Number,
  stockQuantity: Number,
  rating: [Number],
});

module.exports = mongoose.model('Product', ProductSchema);
