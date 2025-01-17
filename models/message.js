import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const Message = mongoose.model(
  "Message",
  new Schema(
    {
      message: {
        type: String,
      },
    },
    { timestamps: true }
  )
);
