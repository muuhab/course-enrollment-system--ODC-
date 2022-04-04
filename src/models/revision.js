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
      throw new Error(`Something Wrong ${error}`);
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
      throw new Error(`Something Wrong ${error}`);
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
      throw new Error(`Something Wrong ${error}`);
    }
  }

  async update(revision, id) {
    try {
      const sql =
        "UPDATE odc_revision SET student_degree=($1), total_right_degree=($2), total_wrong_degree=($3), exam_id=($4), student_id=($5) where id=($6) RETURNING * ";
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
      throw new Error(`Something Wrong ${error}`);
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
      throw new Error(`Something Wrong ${error}`);
    }
  }
}

module.exports = RevisionStore;
