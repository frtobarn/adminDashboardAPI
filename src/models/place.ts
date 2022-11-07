import { Schema, Types, model, Model } from "mongoose";
import { Place } from "../interfaces/place.interface";

const PlaceSchema = new Schema<Place>(
  {
    name: {
      type: String,
      required: true,
    },
    details: {
      type: Object,
      required: true,
      default:{}
    },
    admin_id: {
      type: String,
      required: true,
    },
    resources: {
      type: [String],
      required: true,
      default: [],
    },
    comming_events: {
      type: [String],
      required: true,
      default: [],
    },
    available: {
      type: Boolean,
      required: true,
      default:true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PlaceModel = model("espacios", PlaceSchema);

export default PlaceModel;
