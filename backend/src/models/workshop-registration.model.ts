import mongoose from "mongoose";
import { EWorkshopRegistrationStatus } from "../enums/workshop-registration";

const Schema = mongoose.Schema;

const workshopRegistration = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  billImage: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    enum: EWorkshopRegistrationStatus,
    default: EWorkshopRegistrationStatus.UNCONFIRMED,
  },
  workshopId: {
    type: Schema.Types.ObjectId,
    ref: "Workshop",
  },
});

workshopRegistration.virtual("workshop", {
  ref: "Workshop",
  localField: "workshopId",
  foreignField: "_id",
});

workshopRegistration.set("toObject", { virtuals: true });
workshopRegistration.set("toJSON", { virtuals: true });

const WorkshopRegistration = mongoose.model(
  "WorkshopRegistration",
  workshopRegistration
);

export default WorkshopRegistration;
