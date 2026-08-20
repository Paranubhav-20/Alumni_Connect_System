// seed.js
const mongoose = require("mongoose");
const Company = require("../src/models/company");
const Question = require("../src/models/Question");
const companies = require("../src/data/data");
const questions = require("../src/data/question");

async function seedDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/alumni");
  await Company.deleteMany({});
  await Company.insertMany(companies);

 await Question.deleteMany({});
  await Question.insertMany(questions);

  console.log("Database seeded!");
  mongoose.connection.close();
}

seedDB();
