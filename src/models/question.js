const client = require("../database");
const { stringBetweenParentheses } = require("../services/helpers");

class QuestionStore {
  async index() {
    try {
      const sql = "SELECT * FROM odc_questions";
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
      const sql = "SELECT * FROM odc_questions WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else throw new Error("question is not found");
    } catch (error) {
      if (error.code === "22P02") throw new Error(`id must be integer`);
      throw new Error(error.message);
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
      if (error.code === "23505")
        throw new Error(
          `${stringBetweenParentheses(error.detail)} already exists`
        );
      if (error.code === "23502") throw new Error(`${error.column} is null`);
      if (error.code === "23503") throw new Error(`${stringBetweenParentheses(error.detail).slice(0, -3)} doesn't exist`);
      throw new Error(error.message);
      // else throw new Error()
    }
  }

  async update(question, id) {
    try {
      const sql =
        "UPDATE odc_questions SET question_content=COALESCE($1,question_content), question_answer=COALESCE($2,question_answer), exam_id=COALESCE($3,exam_id) where id=($4) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        question.question_content,
        question.question_answer,
        question.exam_id,
        id,
      ]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else throw new Error("question is not found");
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
      const sql = "DELETE FROM odc_questions WHERE id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      if (result.rows.length) return result.rows[0];
      else throw new Error("question is not found");
    } catch (error) {
      if (error.code === "22P02") throw new Error(`id must be integer`);
      throw new Error(error.message);
    }
  }
}

module.exports = QuestionStore;
