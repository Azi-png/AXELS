import mongoose, { Schema } from "mongoose";
import {
  ProductCollection,
  ProductMaterial,
  ProductStatus,
  ProductSize,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },
    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productLeftCount: {
      type: Number,
      required: true,
    },
    productMaterial: {
      type: String,
      enum: ProductMaterial,
      default: ProductMaterial.GOLD,
    },
    productSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.XS,
    },
    productDesc: {
      type: String,
    },
    productImages: {
      type: [String],
      default: [],
    },
    productViews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

productSchema.index(
  { productName: 1, ProductMaterial: 1, ProductSize: 1 },
  { unique: true }
);

export default mongoose.model("Product", productSchema);
