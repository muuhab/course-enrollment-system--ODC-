const client = require("../database");

class StudentStore {
  async index() {
    try {
      const sql = "SELECT * FROM odc_students";
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
      const sql = "SELECT * FROM odc_students WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }
  async create(student) {
    try {
      const sql =
        "INSERT INTO odc_students(student_name, email, student_phone, student_address, college, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        student.student_name,
        student.email,
        student.student_phone,
        student.student_address,
        student.college,
        student.image,
      ]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }

  async update(student, id) {
    try {
      const sql =
        "UPDATE odc_students SET student_name=($1), email=($2), student_phone=($3), student_address=($4), college=($5), image=($6) where id=($7) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        student.student_name,
        student.email,
        student.student_phone,
        student.student_address,
        student.college,
        student.image,
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
      const sql = "DELETE FROM odc_students WHERE id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }
}

module.exports = StudentStore;
