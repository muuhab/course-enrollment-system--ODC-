const client = require("../database");
const { stringBetweenParentheses } = require("../services/helpers");

class ExamStore {
  async indexExams() {
    try {
      const sql = "SELECT * FROM odc_exams";
      const conn = await client.connect();
      const result = await conn.query(sql);
      conn.release();
      if (result.rows.length) return result.rows;
      else throw new Error("course is not found");
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async indexOneExams(id) {
    try {
      const sql = "SELECT * FROM odc_exams WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      if (result.rows.length) return result.rows;
      else throw new Error("exam is not found");
    } catch (error) {
      if (error.code === "22P02") throw new Error(`id must be integer`);
      throw new Error(error.message);
    }
  }

  async index(course_id) {
    try {
      const sql = "SELECT * FROM odc_exams WHERE course_id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [course_id]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else throw new Error("course is not found");
    } catch (error) {
      if (error.code === "22P02") throw new Error(`id must be integer`);
      throw new Error(error.message);
    }
  }

  async show(id) {
    try {
      const sql = "SELECT * FROM odc_exams WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else if (!course_id) throw new Error("exam is not exist");
      else throw new Error("course or exam is not exist");
    } catch (error) {
      if (error.code === "22P02") throw new Error(`id must be integer`);
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
      if (error.code === "22P02") throw new Error(`id must be integer`);
      if (error.code === "23505")
        throw new Error(
          `${stringBetweenParentheses(error.detail)} already exists`
        );
      if (error.code === "23502") throw new Error(`${error.column} is null`);
      throw new Error(error.message);
    }
  }

  async update(course_id, id) {
    console.log(course_id);
    console.log(id);
    try {
      const sql =
        "UPDATE odc_exams SET course_id=($1) where id=($2) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [course_id, id]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else throw new Error("exam is not found");
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
      const sql = "DELETE FROM odc_exams WHERE id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else throw new Error("exam is not found");
    } catch (error) {
      if (error.code === "22P02") throw new Error(`id must be integer`);
      throw new Error(error.message);
    }
  }
}

module.exports = ExamStore;
