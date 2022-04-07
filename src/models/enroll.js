const client = require("../database");
const { stringBetweenParentheses } = require("../services/helpers");

class EnrollStore {
  async index() {
    try {
      const sql = "SELECT * FROM odc_enroll";
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
      const sql = "SELECT * FROM odc_enroll WHERE student_id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async create(enroll) {
    try {
      const sql =
        "INSERT INTO odc_enroll (student_id, course_id) VALUES($1,$2) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        enroll.student_id,
        enroll.course_id,
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

  async update(enroll, id) {
    try {
      const sql =
        "UPDATE odc_enroll SET course_id=COALESCE($1,course_id)  status=COALESCE($2,status) where student_id=($3) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        enroll.course_id,
        enroll.status,
        id,
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
  async delete(id) {
    try {
      const sql = "DELETE FROM odc_enroll WHERE student_id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async genrateCode(code, id) {
    try {
      const sql =
        "UPDATE odc_enroll SET code=($1), code_time=(to_timestamp($2/ 1000.0)) where student_id=($3) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [code, Date.now(), id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async removeCode(id) {
    try {
      const sql =
        "UPDATE odc_enroll SET code=(null) , code_time=null where student_id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async changeExpiresHours(id, hours) {
    try {
      const sql =
        "UPDATE odc_enroll SET expire_after=($1) where student_id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [hours, id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }
  async viewStatus(id) {
    try {
      const sql = "SELECT status FROM odc_enroll WHERE student_id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }
}

module.exports = EnrollStore;
