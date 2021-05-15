import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    userName: { type: String, required: true },
    name: { type: String, required: true },
    finishesAt: { type: Date, required: true },
    description: { type: String },
  },
  { timestamps: true },
);
