import { Router } from "express";
import {
  deleteEvent,
  getEvent,
  getEvents,
  postEvent,
  updateEvent,
  getEventsGenres,
  getEventsTitle,
  getEventsYears,
  saveEvent,
  unsaveEvent
} from "../controllers/event";

import { logMiddleware } from "../middlewares/log";

//import { checkJwt } from "../middlewares/sessions";
//router.get("/", checkJwt ,getOrders )

const router = Router();

router.get("/", getEvents);

router.get("/:id", logMiddleware, getEvent);

router.post("/", postEvent);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

router.get("/genre/:genre", getEventsGenres);

router.get("/year/:year", getEventsYears);

router.get("/title/:title", getEventsTitle);

router.put("/like/:id", saveEvent);

router.put("/unlike/:id", unsaveEvent);

export { router };
