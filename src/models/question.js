const client = require("../database");

class QuestionStore {
  async index() {
    try {
      const sql = "SELECT * FROM odc_questions";
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
      const sql = "SELECT * FROM odc_questions WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }
  async create(question) {
    try {
      const sql =
        "INSERT INTO odc_questions(question_content, question_answer, exam_id) VALUES($1, $2, $3) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        question.question_content,
        question.question_answer,
        question.exam_id,
      ]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }

  async update(question, id) {
    try {
      const sql =
        "UPDATE odc_questions SET question_content=($1), question_answer=($2), exam_id=($3) where id=($4) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        question.question_content,
        question.question_answer,
        question.exam_id,
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
      const sql = "DELETE FROM odc_questions WHERE id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }
}

module.exports = QuestionStore;
