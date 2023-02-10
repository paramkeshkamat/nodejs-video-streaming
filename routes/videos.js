import express from "express";
import {
  getAllVideos,
  getSingleVideoDetails,
  streamVideo,
} from "../controller/videos.js";
import { checkApiKey } from "../middleware/checkApiKey.js";

const router = express.Router();

router.get("/", checkApiKey, getAllVideos);
router.get("/details/:id", checkApiKey, getSingleVideoDetails);
router.get("/stream/:id", checkApiKey, streamVideo);

export default router;
