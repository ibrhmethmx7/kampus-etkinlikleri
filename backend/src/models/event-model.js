import mongoose from "mongoose";

export const categories = ["Seminer", "Atölye", "Söyleşi", "Yarışma"];

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title zorunlu"],
      trim: true,
      minlength: [3, "title en az 3 karakter olmalı"],
      maxlength: [100, "title en fazla 100 karakter olabilir"],
    },
    category: {
      type: String,
      required: [true, "category zorunlu"],
      enum: { values: categories, message: "category şunlardan biri olmalı: Seminer, Atölye, Söyleşi, Yarışma" },
    },
    capacity: {
      type: Number,
      min: [0, "capacity negatif olamaz"],
      default: 0,
    },
    date: {
      type: String,
      required: [true, "date zorunlu"],
      match: [/^\d{4}-\d{2}-\d{2}$/, "date YYYY-AA-GG biçiminde olmalı"],
    },
    time: { type: String, trim: true, default: "" },
    location: { type: String, trim: true, default: "" },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "description en fazla 500 karakter olabilir"],
      default: "",
    },
  },
  { timestamps: true }
);

export const Event = mongoose.model("Event", eventSchema);
