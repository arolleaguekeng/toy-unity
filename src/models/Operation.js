const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;
const operationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [2, "must be atleast 2 charcters"],
      maxlength: [32, "must be atleast 2 charcters"],
    },
   initBy:{
    type: ObjectId,
    require: true,
    ref: User

   }
  },
  {
    timestamps: true,
  }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

module.exports =  Category;
