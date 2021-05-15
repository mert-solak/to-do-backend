import mongoose from 'mongoose';

const { Schema } = mongoose;

export const schema = {
  name: { type: String, required: true },
  userName: { type: String, required: true },
  status: { type: String, required: true },
  startsAt: { type: Date, default: null },
  finishesAt: { type: Date, default: null },
  description: { type: String, default: null },
};

const blogSchema = new Schema(schema, { timestamps: true });
export const taskModel = mongoose.model('task', blogSchema);
