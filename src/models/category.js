const client = require("../database");

class Categorystore {
  async index() {
    try {
      const sql = "SELECT * FROM odc_categories";
      const conn = await client.connect();
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }

  async show(id) {
    try {
      const sql = "SELECT * FROM odc_categories WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }
  async create(category) {
    try {
      const sql =
        "INSERT INTO odc_categories (category_name) VALUES($1) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [category.category_name]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }

  async update(category, id) {
    try {
      const sql =
        "UPDATE odc_categories SET category_name=($1) where id=($2) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [category.category_name, id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }
  async delete(id) {
    try {
      const sql = "DELETE FROM odc_categories WHERE id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }
}

module.exports = Categorystore;
