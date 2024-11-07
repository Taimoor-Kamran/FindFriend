import mongoose from "mongoose";
const { Schema } = mongoose;

const SubcategorySchema = new Schema({
  title: String,
  description: String,
  thumbnail: String,
  category: { type: mongoose.Types.ObjectId, ref: "Categories" },
});

export const SubCategoryModal = mongoose.model(
  "SubCategories",
  SubcategorySchema
);
