const client = require("../database");

class EnrollStore {
  async index() {
    try {
      const sql = "SELECT * FROM odc_enroll";
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
      const sql = "SELECT * FROM odc_enroll WHERE student_id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
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
      throw new Error(`Something Wrong ${error}`);
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
      throw new Error(`Something Wrong ${error}`);
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
      throw new Error(`Something Wrong ${error}`);
    }
  }
}

module.exports = EnrollStore;
