import { Place } from "../interfaces/place.interface";
import PlaceModel from "../models/place";
//import UserModel from "../models/user";

//Initial querys made for administrative tasks...
const insertAPlace = async (place: Place) => {
  const responsedInsert = await PlaceModel.create(place);
  return responsedInsert;
};

const getAllPlaces = async () => {
  const responsedItems = await PlaceModel.find({},{name:1});
  return responsedItems;
};

const getAPlace = async (id: String) => {
  const responsedItem = await PlaceModel.findOne({ _id: id });
  return responsedItem;
};

const updateAPlace = async (id: String, data: Place) => {
  const responsedItem = await PlaceModel.findOneAndUpdate({ _id: id }, data, {
    new: true, //True devuelve el objeto actualizado, si no el viejo
  });
  return responsedItem;
};

const deleteAPlace = async (id: String) => {
  const responsedItem = await PlaceModel.findOneAndDelete({ _id: id });
  return responsedItem;
};



//Export all services.

export {
  insertAPlace,
  getAllPlaces,
  getAPlace,
  updateAPlace,
  deleteAPlace,
};
