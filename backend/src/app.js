import express from "express";
import cors from "cors";
import eventRoutes from "./routes/event-routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString(),
    student: "2626512001",
  });
});

app.use("/events", eventRoutes);

app.use((req, res) => {
  res.status(404).json({ error: { message: "Route not found" } });
});

// 4 parametreli olduğu için Express bunu hata yakalayıcı sayar; next(err) buraya gelir
app.use((err, req, res, next) => {
  // bozuk JSON body gibi istemci hataları 400 olarak kalsın
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: { message: "Invalid JSON body" } });
  }
  console.error(err.message);
  res.status(500).json({ error: { message: "Server error" } });
});

export default app;
