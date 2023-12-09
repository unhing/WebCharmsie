import mongoose from "mongoose";

const Schema = mongoose.Schema;

const workshop = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
});

const Workshop = mongoose.model("Workshop", workshop);

export default Workshop;
