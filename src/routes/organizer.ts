import { Router } from "express";
import {
  getOrganizer,
  getOrganizers,
  updateOrganizer,
  postOrganizer,
  deleteOrganizer,
  getOrganizerOrganization,
} from "../controllers/organizer";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get("/", getOrganizers);

router.get("/:id", logMiddleware, getOrganizer);

router.post("/", postOrganizer);

router.put("/:id", updateOrganizer);

router.delete("/:id", deleteOrganizer);

router.get("/organization/:organization", getOrganizerOrganization);

export { router };
