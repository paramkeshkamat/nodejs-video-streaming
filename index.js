import express from "express";
const app = express();

import cors from "cors";
import videosRouter from "./routes/videos.js";

import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static(__dirname + "/assets"));

app.get("/", (req, res) => {
  res.send("Video Stream API 📺");
});

app.use("/api/videos", videosRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server listening to port ${PORT}`));
