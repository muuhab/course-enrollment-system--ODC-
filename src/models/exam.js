const client = require("../database");

class ExamStore {
  async index(course_id) {
    try {
      const sql = "SELECT * FROM odc_exams WHERE course_id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql,[course_id]);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }

  async show(id,course_id) {
    try {
      const sql = "SELECT * FROM odc_exams WHERE id=($1) AND course_id=($2)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id,course_id]);
      conn.release(); 
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
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
      throw new Error(`Something Wrong ${error}`);
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
      throw new Error(`Something Wrong ${error}`);
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
      throw new Error(`Something Wrong ${error}`);
    }
  }
}

module.exports = ExamStore;
