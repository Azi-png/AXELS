import { ObjectId } from "mongoose";
import {
  ProductCollection,
  ProductMaterial,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productMaterial: ProductMaterial;
  productSize: ProductSize;
  productDesc?: string;
  productImages: string[];
  productViews: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  search?: string;
  //new
  minPrice?: number;
  maxPrice?: number;
  material?: string;
}

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productMaterial?: ProductMaterial;
  productSize?: string;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: string;
  productPrice?: number;
  productLeftCount?: number;
  productMaterial?: ProductMaterial;
  productSize?: string;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}

export interface ProductListResponse {
  products: Product[];
  minPrice: number;
  maxPrice: number;
  totalCount: number;
}
