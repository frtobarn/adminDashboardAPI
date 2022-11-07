import { Router } from "express";
import {
  deletePlace,
  getPlace,
  getPlaces,
  postPlace,
  updatePlace,
} from "../controllers/place";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get("/", getPlaces);

router.get("/:id", logMiddleware, getPlace);

router.post("/", postPlace);

router.put("/:id", updatePlace);

router.delete("/:id", deletePlace);

export { router };
