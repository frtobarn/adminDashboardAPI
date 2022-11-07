import { Request, response, Response } from "express";
import {
  insertAPlace,
  getAllPlaces,
  getAPlace,
  updateAPlace,
  deleteAPlace,
} from "../services/place";
import { handelHttp } from "../utils/error.handle";

const getPlaces = async (req: Request, res: Response) => {
  try {
    const responsedItems = await getAllPlaces();
    res.send(responsedItems);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEMS");
  }
};

const getPlace = async (req: Request, res: Response) => {
  try {
    const responsedItem = await getAPlace(req.params.id);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_GETTING_ITEM");
  }
};

const updatePlace = async (req: Request, res: Response) => {
  try {
    const responsedItem = await updateAPlace(req.params.id, req.body);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_UPDATING_ITEM");
  }
};

const postPlace = async ({ body }: Request, res: Response) => {
  try {
    const responsedItem = await insertAPlace(body);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_POSTING_ITEM", error);
  }
};

const deletePlace = async (req: Request, res: Response) => {
  try {
    const responsedItem = await deleteAPlace(req.params.id);
    res.send(responsedItem);
  } catch (error) {
    handelHttp(res, "ERROR_DELETING_ITEM");
  }
};


export {
  getPlace,
  getPlaces,
  updatePlace,
  postPlace,
  deletePlace
};
