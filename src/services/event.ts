import { Event } from "../interfaces/event.interface";
import EventModel from "../models/event";
//import UserModel from "../models/user";

//Initial querys made for administrative tasks...
const insertAEvent = async (event: Event) => {
  const responsedInsert = await EventModel.create(event);
  return responsedInsert;
};

const getAllEvents = async () => {
  const responsedItems = await EventModel.find({}, {title:1,schedule:1, place_id:1});
  return responsedItems;
};

const getAEvent = async (id: String) => {
  const responsedItem = await EventModel.findOne({ _id: id });
  return responsedItem;
};

const updateAEvent = async (id: String, data: Event) => {
  const responsedItem = await EventModel.findOneAndUpdate({ _id: id }, data, {
    new: true, //True devuelve el objeto actualizado, si no el viejo
  });
  return responsedItem;
};

const deleteAEvent = async (id: String) => {
  const responsedItem = await EventModel.findOneAndDelete({ _id: id });
  return responsedItem;
};

//Specific querys by fields
const getEventsByGenre = async (genre: String) => {
  const responsedItems = await EventModel.find(
    { class: genre },
    { title: 1, image: 1 }
  );
  return responsedItems;
};

const getEventsByYear = async (year: String) => {
  const responsedItems = await EventModel.find(
    { year: year },
    { title: 1, image: 1 }
  );
  return responsedItems;
};

const getEventsByName = async (title: String) => {
  const responsedItems = await EventModel.find(
    { title: title },
    { title: 1, image: 1 }
  );
  return responsedItems;
};

// const getMyFavorites = async (id: string) => {
//   const favorites = await UserModel.findOne(
//     { _id: id },
//     { savedShows: 1, _id: 0 }
//   );
//   const savedShows = favorites?.savedShows!;
//   const responsedItems = [];
//   for (const showId of savedShows) {
//     const movieData = await MovieModel.findOne(
//       { _id: showId },
//       { title: 1, image: 1 }
//     );
//     responsedItems.push(movieData);
//   }
//   return responsedItems;
// };

//Modify "likes" field in a movie document

const saveAEvent = async (id: string) => {
  const responseItem = await EventModel.updateOne(
    { _id: id },
    { $inc: { likes: 1 } }
  );
  return responseItem;
};

const unsaveAEvent = async (id: string) => {
  const responseItem = await EventModel.updateOne(
    { _id: id },
    { $inc: { likes: -1 } }
  );
  return responseItem;
};

//Export all services.

export {
  insertAEvent,
  getAllEvents,
  getAEvent,
  updateAEvent,
  deleteAEvent,
  getEventsByGenre,
  getEventsByName,
  getEventsByYear,
  saveAEvent,
  unsaveAEvent,
};
