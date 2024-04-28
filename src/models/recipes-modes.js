
import mongoose ,{Schema} from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  activeTime: {
    type: String,
    required: true
  },
  totalTime: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  serves: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    required: true
  },
  steps: {
    type: [String],
    required: true
  }
},
{
  timestamps: true,
  versionKey:false
})

export const recipesModel = mongoose.models.recipes  ?? mongoose.model("recipes", schema)