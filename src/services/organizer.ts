import { Organizer } from "../interfaces/organizer.interface";
import OrganizerModel from "../models/organizer";
//import UserModel from "../models/user";

//Initial querys made for administrative tasks...
const insertAnOrganizer = async (organizer: Organizer) => {
  const responsedInsert = await OrganizerModel.create(organizer);
  return responsedInsert;
};

const getAllOrganizers = async () => {
  const responsedItems = await OrganizerModel.find({}, {name:1,phoneNumber:1});
  return responsedItems;
};

const getAnOrganizer = async (id: String) => {
  const responsedItem = await OrganizerModel.findOne({ _id: id });
  return responsedItem;
};

const updateAnOrganizer = async (id: String, data: Organizer) => {
  const responsedItem = await OrganizerModel.findOneAndUpdate({ _id: id }, data, {
    new: true, //True devuelve el objeto actualizado, si no el viejo
  });
  return responsedItem;
};

const deleteAnOrganizer = async (id: String) => {
  const responsedItem = await OrganizerModel.findOneAndDelete({ _id: id });
  return responsedItem;
};

//Specific querys by fields
const getOrganizersByOrganization = async (organization: String) => {
  const responsedItems = await OrganizerModel.find(
    { organization: organization },
    { name: 1, phoneNumber: 1 }
  );
  return responsedItems;
};

//Export all services.

export {
  insertAnOrganizer,
  getAllOrganizers,
  getAnOrganizer,
  updateAnOrganizer,
  deleteAnOrganizer,
  getOrganizersByOrganization
};
