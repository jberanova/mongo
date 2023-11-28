const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    name: {type: String, required: true},
    os: {type: String, required: true},
    brand: {type: String, required: true},
    cpu: {type: String, required: true},
    ram: {type: Number, required: true},
    camera: {type: Number, required: true},
    
  });

  module.exports = mongoose.model("Phone", phoneSchema);