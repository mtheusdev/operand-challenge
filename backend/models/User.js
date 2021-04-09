const knex = require('../database/connection');
const bcrypt = require('bcrypt')

class User {
  
  async findAll () {
    try {
      var result = await knex.select(["id", "email", "name"]).table("users");
      return {
        status: 'success',
        result
      }
    } catch (err) {
      return {
        status: 'false',
        error: err
      }
    }  
  }

  async findEmail(email) {
    try {
      var result = await knex.select("").from("users").where({
        email
      })
      return result.length > 0 ? true : false
    } catch (e) {
      return false
    }
  }
  async new(name, email, password) {
    try {
      
      var hash = await bcrypt.hash(password, 10)
      await knex.insert({name, email, password: hash}).table("users")
      return {
        status: 'success'
      }
    } catch (err) {
      return {
        status: 'false',
        error: err
      }
    }
  }
}

module.exports = new User()