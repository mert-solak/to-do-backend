import mongoose from 'mongoose';

const { Schema } = mongoose;

export const schema = {
  userName: { type: String, required: true },
  name: { type: String, required: true },
  finishesAt: { type: Date, required: true },
  description: { type: String },
};

const blogSchema = new Schema(schema, { timestamps: true });
export const taskModel = mongoose.model('task', blogSchema);
