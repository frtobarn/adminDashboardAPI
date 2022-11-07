import { Request, response, Response } from "express";
import {
  insertAEvent,
  getAllEvents,
  getAEvent,
  updateAEvent,
  deleteAEvent,
  getEventsByGenre,
  getEventsByName,
  getEventsByYear,
  saveAEvent,
  unsaveAEvent
} from "../services/event";
import { handelHttp } from "../utils/error.handle";

const getEvents = async (req: Request, res: Response) => {
  try {
    const responsedItems = await getAllEvents();
    res.send(responsedItems);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEMS");
  }
};

const getEvent = async (req: Request, res: Response) => {
  try {
    const responsedItem = await getAEvent(req.params.id);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEM");
  }
};

const updateEvent = async (req: Request, res: Response) => {
  try {
    const responsedItem = await updateAEvent(req.params.id, req.body);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_UPDATING_ITEM");
  }
};

const postEvent = async ({ body }: Request, res: Response) => {
  try {
    const responsedItem = await insertAEvent(body);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_POSTING_ITEM", error);
  }
};

const deleteEvent = async (req: Request, res: Response) => {
  try {
    const responsedItem = await deleteAEvent(req.params.id);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_DELETING_ITEM");
  }
};

const getEventsGenres = async (req: Request, res: Response) => {
  try {
    const responsedItems = await getEventsByGenre(req.params.genre);
    res.send(responsedItems);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEM");
  }
};

const getEventsYears = async (req: Request, res: Response) => {
  try {
    const responsedItems = await getEventsByYear(req.params.year);
    res.send(responsedItems);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEM");
  }
};

const getEventsTitle = async (req: Request, res: Response) => {
  try {
    const responsedItems = await getEventsByName(req.params.title);
    res.send(responsedItems);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEM");
  }
};

// const getFavorites = async (req: Request, res: Response) => {
//   try {
//     const responsedItems = await getMyFavorites(req.params.id);
//     res.send(responsedItems);
//   } catch (error) {
//     handelHttp(res, "ERROR_GETTING_FAVORITES");
//   }
// };

const saveEvent = async (req: Request, res: Response) => {
  try {
    const responsedItem = await saveAEvent(req.params.id);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_SAVING_ITEM");
  }
};

const unsaveEvent = async (req: Request, res: Response) => {
  try {
    const responsedItem = await unsaveAEvent(req.params.id);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_SAVING_ITEM");
  }
};

export {
  getEvent,
  getEvents,
  updateEvent,
  postEvent,
  deleteEvent,
  getEventsGenres,
  getEventsYears,
  getEventsTitle,
  saveEvent,
  unsaveEvent
};
