import { ObjectId } from 'mongoose';
import { ProductCollection, ProductStatus } from './../enums/product.enum';

export interface Product {
    _id: ObjectId
    ProductStatus: ProductStatus;
    productCollection: string;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize: string;
    productVolume: number;
    productDesc?: string;
    productImages: string[];
    productViews: number;
}

export interface ProductInquiry {
    order: string;
    page: number;
    limit: number;
    productCollection?: ProductCollection;
    search?: string;
}

export interface ProductInput {
    ProductStatus?: ProductStatus;
    productCollection: string;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize?: string;
    productVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}

export interface ProductUpdateInput {
    _id: ObjectId;
    ProductStatus?: ProductStatus;
    productCollection?: string;
    productName?: string;
    productPrice?: number;
    productLeftCount?: number;
    productSize?: string;
    productVolume?: number;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}


