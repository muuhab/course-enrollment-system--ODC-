const client = require("../database");
const { stringBetweenParentheses } = require("../services/helpers");

class ExamStore {
  async index(course_id) {
    try {
      const sql = "SELECT * FROM odc_exams WHERE course_id=($1) ORDER BY random() LIMIT 1";
      const conn = await client.connect();
      const result = await conn.query(sql, [course_id]);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async show(id, course_id) {
    try {
      const sql = "SELECT * FROM odc_exams WHERE id=($1) AND course_id=($2)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id, course_id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async create(course_id) {
    try {
      const sql = "INSERT INTO odc_exams(course_id) VALUES($1) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [course_id]);
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

  async update(course_id, id) {
    try {
      const sql =
        "UPDATE odc_exams SET course_id=($1) where id=($2) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [course_id, id]);
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
      const sql = "DELETE FROM odc_exams WHERE id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = ExamStore;
