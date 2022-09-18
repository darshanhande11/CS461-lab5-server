// Darshan Devendra Hande
// 201951052
const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, {})