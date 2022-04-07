const client = require("../database");

class RevisionStore {
  async index() {
    try {
      const sql = "SELECT * FROM odc_revision";
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
      const sql = "SELECT * FROM odc_revision WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async create(revision) {
    try {
      const sql =
        "INSERT INTO odc_revision(student_degree, total_right_degree, total_wrong_degree, exam_id,student_id) VALUES($1, $2, $3, $4, $5) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        revision.student_degree,
        revision.total_right_degree,
        revision.total_wrong_degree,
        revision.exam_id,
        revision.student_id,
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

  async update(revision, id) {
    try {
      const sql =
        "UPDATE odc_revision SET student_degree=COALESCE($1,student_degree), total_right_degree=COALESCE($2,total_right_degree), total_wrong_degree=COALESCE($3,total_wrong_degree), exam_id=COALESCE($4,exam_id), student_id=COALESCE($5,student_id) where id=($6) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        revision.student_degree,
        revision.total_right_degree,
        revision.total_wrong_degree,
        revision.exam_id,
        revision.student_id,
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
      const sql = "DELETE FROM odc_revision WHERE id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = RevisionStore;
