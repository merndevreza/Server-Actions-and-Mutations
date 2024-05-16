import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Anonymous",
    min: 2,
    max: 100,
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    min: 2,
    max: 100,
  },
});
//now make a model

const User = mongoose.models.User || mongoose.model("User", UsersSchema);
/**
 * First time will use this- mongoose.model("User", UsersSchema)
 * 
 * but after that will use this-  mongoose.models.User
*/

export default User;