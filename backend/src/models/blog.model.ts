//title, date, author, content, coverImage
import mongoose from "mongoose" ;

const Schema = mongoose.Schema;

const blog = new Schema({
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImage :{
        type: String,
        required:true,
    }
  });
const Blog = mongoose.model("Blog", blog);

export default Blog;