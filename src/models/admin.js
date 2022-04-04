const client = require("../database");

class AdminStore {
  async index() {
    try {
      const sql = "SELECT * FROM odc_admins";
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
      const sql = "SELECT * FROM odc_admins WHERE id=($1)";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }
  async create(admin) {
    try {
      const sql =
        "INSERT INTO odc_admins(role,username,email,password,image) VALUES($1, $2, $3, $4, $5) RETURNING *";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        admin.role,
        admin.username,
        admin.email,
        admin.password,
        admin.image,
      ]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }
  

  async update(admin, id) {
    try {
      const sql =
        "UPDATE odc_admins SET role=($1), username=($2), email=($3), password=($4), image=($5) where id=($6) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [
        admin.role,
        admin.username,
        admin.email,
        admin.password,
        admin.image,
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
      const sql = "DELETE FROM odc_admins WHERE id=($1) RETURNING * ";
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error) {
      throw new Error(`Something Wrong ${error}`);
    }
  }
}

module.exports = AdminStore;
