const CategoryStore = require("../models/category");
const store = new CategoryStore();
const { faker } = require("@faker-js/faker");

const category_name = faker.name.findName();

const category = async () => {
  await store.create({
    category_name,
  });
};

module.exports = category;
