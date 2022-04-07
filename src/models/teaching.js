const client = require("../database");
const { stringBetweenParentheses } = require("../services/helpers");

class TeachingStore {
  async index() {
    try {
      const sql = "SELECT * FROM odc_teaching";
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
      const sql = "SELECT * FROM odc_teaching WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else throw new Error("teaching is not found");
    } catch (error) {
      if (error.code === "22P02") throw new Error(`id must be integer`);
      throw new Error(error.message);
    }
  }
  async create(teaching) {
    try {
      const sql =
        "INSERT INTO odc_teaching(course_id, trainer_id) VALUES($1,$2) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        teaching.course_id,
        teaching.trainer_id,
      ]);
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

  async update(teaching, id) {
    try {
      const sql =
        "UPDATE odc_teaching SET course_id=($1) trainer_id=($2) where id=($3) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [teaching.course_id,teaching.trainer_id, id]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else throw new Error("teaching is not found");
    } catch (error) {
      if (error.code === "22P02") throw new Error(`id must be integer`);
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
      const sql = "DELETE FROM odc_teaching WHERE id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else throw new Error("teaching is not found");
    } catch (error) {
      if (error.code === "22P02") throw new Error(`id must be integer`);
      throw new Error(error.message);
    }
  }
}

module.exports = TeachingStore;
