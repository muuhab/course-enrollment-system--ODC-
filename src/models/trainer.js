const client = require("../database");
const { stringBetweenParentheses } = require("../services/helpers");

class TrainerStore {
  async index() {
    try {
      const sql = "SELECT * FROM odc_trainers";
      const conn = await client.connect();
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async show(id) {
    try {
      const sql = "SELECT * FROM odc_trainers WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async create(trainer) {
    try {
      const sql = "INSERT INTO odc_trainers(name) VALUES($1) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [trainer.name]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      if (error.code === "23505")
        throw new Error(
          `${stringBetweenParentheses(error.detail)} already exists`
        );
      if (error.code === "23502") throw new Error(`${error.column} is null`);
      throw new Error(error.message);
    }
  }

  async update(trainer, id) {
    try {
      const sql =
        "UPDATE odc_trainers SET course_id=($1) where id=($2) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [trainer.name, id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      if (error.code === "23505")
        throw new Error(
          `${stringBetweenParentheses(error.detail)} already exists`
        );
      if (error.code === "23502") throw new Error(`${error.column} is null`);
      throw new Error(error.message);
    }
  }
  async delete(id) {
    try {
      const sql = "DELETE FROM odc_trainers WHERE id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = TrainerStore;
