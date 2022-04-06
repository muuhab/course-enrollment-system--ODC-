const {category} = require("./categories");
const {course} = require("./courses");
const {exam} = require("./exams");
const question = require("./questions");
const revision = require("./revisions");
const trainer = require("./trainers");
const {student} = require("./students");

module.exports = fake = () => {
  student();
  category();
  course();
  exam();
  question();
  revision();
  trainer();
};
