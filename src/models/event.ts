import { Schema, Types, model, Model } from "mongoose";
import { Event } from "../interfaces/event.interface";

const EventSchema = new Schema<Event>(
  {
    title: {
      type: String,
      required: true,
    },
    schedule: {
      type: Date,
      required: true,
    },
    place_id: {
      type: String,
      required: true,
    },
    organizer_id: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    requeriments: {
      type: [String],
      required: true,
      default: [],
    },
    confirmed: {
      type: Boolean,
      required: true,
    },
    cancelled: {
      type: Boolean,
      required: true,
    },
    done: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

EventSchema.virtual("event_date")
.set(function(date){
    // El formato esperado es 'yyyy-mm-ddThh:mm.uuuZ' que es el devuelto por el campo input
    // el valor recibido se almacenará en el campo schedule del documento
    this.schedule = new Date(date);
})
.get(function(){
  return this.schedule.toISOString()
})

const EventModel = model("eventos", EventSchema);

export default EventModel;
