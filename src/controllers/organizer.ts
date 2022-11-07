import { Request, response, Response } from "express";
import {
  insertAnOrganizer,
  getAllOrganizers,
  getAnOrganizer,
  updateAnOrganizer,
  deleteAnOrganizer,
  getOrganizersByOrganization,
} from "../services/organizer";
import { handelHttp } from "../utils/error.handle";

const getOrganizers = async (req: Request, res: Response) => {
  try {
    const responsedItems = await getAllOrganizers();
    res.send(responsedItems);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEMS");
  }
};

const getOrganizer = async (req: Request, res: Response) => {
  try {
    const responsedItem = await getAnOrganizer(req.params.id);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEM");
  }
};

const updateOrganizer = async (req: Request, res: Response) => {
  try {
    const responsedItem = await updateAnOrganizer(req.params.id, req.body);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_UPDATING_ITEM");
  }
};

const postOrganizer = async ({ body }: Request, res: Response) => {
  try {
    const responsedItem = await insertAnOrganizer(body);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_POSTING_ITEM", error);
  }
};

const deleteOrganizer = async (req: Request, res: Response) => {
  try {
    const responsedItem = await deleteAnOrganizer(req.params.id);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_DELETING_ITEM");
  }
};

const getOrganizerOrganization = async (req: Request, res: Response) => {
  try {
    const responsedItems = await getOrganizersByOrganization(
      req.params.organization
    );
    res.send(responsedItems);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEM");
  }
};

export {
  getOrganizer,
  getOrganizers,
  updateOrganizer,
  postOrganizer,
  deleteOrganizer,
  getOrganizerOrganization,
};
