import { Schema, Types, model, Model } from "mongoose";
import { Organizer } from "../interfaces/organizer.interface";

const OrganizerSchema = new Schema<Organizer>(
  {
    name: {
      type: String,
      required: true,
    },
    dni: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    events: {
      type: [String],
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OrganizerModel = model("organizadores", OrganizerSchema);

export default OrganizerModel;
