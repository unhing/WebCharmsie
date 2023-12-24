import mongoose from "mongoose";
import { EOrderStatus } from "../enums/order";

const Schema = mongoose.Schema;

const order = new Schema({
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
  address: {
    type: String,
    required: true,
  },
  totalValue: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: EOrderStatus,
    default: EOrderStatus.PENDING
  },
  cartOrder: {
    type: Array,
    required: true,
  },
});

const Order = mongoose.model("Order", order);

export default Order;
