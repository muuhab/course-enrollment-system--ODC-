const CategoryStore = require("../models/category");
const store = new CategoryStore();
const { faker } = require("@faker-js/faker");

const category_name = faker.name.findName();

let catId;
const category = async () => {
  catId = await store.create({
    category_name,
  })
};

module.exports = { category, category_id:catId?.id };
