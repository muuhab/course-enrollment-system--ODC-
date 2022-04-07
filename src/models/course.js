const client = require("../database");
const { stringBetweenParentheses } = require("../services/helpers");

class CourseStore {
  async index() {
    try {
      const sql = "SELECT * FROM odc_courses";
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
      const sql = "SELECT * FROM odc_courses WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else throw new Error("course is not found");
    } catch (error) {
      if (error.code === "22P02") throw new Error(`id must be integer`);
      throw new Error(error.message);
    }
  }
  async create(course) {
    try {
      const sql =
        "INSERT INTO odc_courses(course_name, course_level, category_id) VALUES($1, $2, $3) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        course.course_name,
        course.course_level,
        course.category_id,
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

  async update(course, id) {
    try {
      const sql =
        "UPDATE odc_courses SET course_name=COALESCE($1,course_name), course_level=COALESCE($2,course_level), category_id=COALESCE($3,category_id) where id=($4) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        course.course_name,
        course.course_level,
        course.category_id,
        id,
      ]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else throw new Error("course is not found");
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
      const sql = "DELETE FROM odc_courses WHERE id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else throw new Error("course is not found");
    } catch (error) {
      if (error.code === "22P02") throw new Error(`id must be integer`);
      throw new Error(error.message);
    }
  }
}

module.exports = CourseStore;
