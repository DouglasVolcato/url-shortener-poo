import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  id: { type: String, required: true },
  url: { type: String, required: true },
});

export const urlModel = mongoose.model("urlModel", urlSchema);
