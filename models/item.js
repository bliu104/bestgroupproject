const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema(
  {
    title: { type: String, required: true },
    image_url: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: String },
    price: { type: String, required: true },
    color: { type: String, },
    user_id: { type: Schema.Types.ObjectId, ref: 'users_id' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('items', Item)
