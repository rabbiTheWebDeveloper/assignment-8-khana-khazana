
import mongoose ,{Schema} from "mongoose";

const schema = new Schema(
  {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favourites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'recipes'
    }]
}
)
export const usersModel = mongoose.models.users  ?? mongoose.model("users", schema)