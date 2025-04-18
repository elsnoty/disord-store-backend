import { Types } from "mongoose";

export interface Review {
  id: string;
  user: Types.ObjectId;
  reviewBody: string;
  wroteAt: Date;
  updatedAt: Date;
  reviewedModel: Types.ObjectId;
  reviewType: "Product" | "Store" | "Platform";
}

export type ReviewDocument = Review;
