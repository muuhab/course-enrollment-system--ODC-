const client = require("../database");
const bcrypt = require("bcrypt");

const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;

class StudentStore {
  async index() {
    try {
      const sql = "SELECT * FROM odc_students";
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
      const sql = "SELECT * FROM odc_students WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async create(student) {
    try {
      const sql =
        "INSERT INTO odc_students(student_name, email, student_phone, student_address, college, image, username, password) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
      const conn = await client.connect();
      const hash = bcrypt.hashSync(
        student.password + BCRYPT_PASSWORD,
        parseInt(SALT_ROUNDS)
      );
      const result = await conn.query(sql, [
        student.student_name,
        student.email,
        student.student_phone,
        student.student_address,
        student.college,
        student.image,
        student.username,
        hash,
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

  async update(student, id) {
    try {
      const sql =
        "UPDATE odc_students SET student_name=COALESCE($1,student_name), email=COALESCE($2,email), student_phone=COALESCE($3,student_phone), student_address=COALESCE($4,student_address), college=COALESCE($5,college), image=COALESCE($6,image), username=COALESCE($7,username) where id=($8) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        student.student_name,
        student.email,
        student.student_phone,
        student.student_address,
        student.college,
        student.image,
        student.username,
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
      const sql = "DELETE FROM odc_students WHERE id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async authenticate(username, password) {
    const sql = "SELECT * FROM odc_students WHERE username=($1) ";
    const conn = await client.connect();
    const result = await conn.query(sql, [username]);
    conn.release();
    if (result.rows.length) {
      const student = result.rows[0];
      if (bcrypt.compareSync(password + BCRYPT_PASSWORD, student.password))
        return student;
    }
    return null;
  }
}

module.exports = StudentStore;
