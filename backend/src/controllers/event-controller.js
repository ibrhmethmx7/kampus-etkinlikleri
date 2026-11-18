import mongoose from "mongoose";
import { Event } from "../models/event-model.js";

const notFound = (res) =>
  res.status(404).json({ error: { message: "Event not found" } });

// GET /events  (?category=Atölye ile filtrelenebilir)
export async function getEvents(req, res, next) {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const events = await Event.find(filter).sort({ date: 1 });
    res.json(events);
  } catch (err) {
    next(err);
  }
}

// GET /events/:id
export async function getEventById(req, res, next) {
  try {
    // "yok" gibi ObjectId olmayan bir değer CastError verip 500'e düşmesin
    if (!mongoose.isValidObjectId(req.params.id)) {
      return notFound(res);
    }

    const event = await Event.findById(req.params.id);
    if (!event) {
      return notFound(res);
    }

    res.json(event);
  } catch (err) {
    next(err);
  }
}

// POST /events
export async function createEvent(req, res, next) {
  try {
    const event = await Event.create(req.body ?? {});
    res.status(201).json(event);
  } catch (err) {
    // zorunlu alan, enum, minlength gibi kurallar schema'da; ihlal edilirse 400
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: { message: err.message } });
    }
    next(err);
  }
}
