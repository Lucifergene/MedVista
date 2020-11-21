//IMPORTING THE PACKAGES WE HAVE INSTALLED INTO OUR PROJECT
const mongoose = require('mongoose');

//CREATING A SCHEMA
const PostSchema = new mongoose.Schema({

    name: String,
    email:String,
    bloodgroup: String,
    status:String,
    imgurl:String,
    result:String
  });
  
  const Post = mongoose.model('Post', PostSchema , 'covid_records');
  
  
//EXPORTING THE SCHEMA
  module.exports = Post;