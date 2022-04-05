const RevisionStore = require("../models/trainer");
const store = new RevisionStore();
const { faker } = require("@faker-js/faker");

const name = faker.name.findName();

const trainer = async () => {
  await store.create({
    name,
  });
};

module.exports = trainer;
