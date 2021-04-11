const knex = require('../database/connection');
const bcrypt = require('bcrypt')

class User {

    async findAll() {
        try {
            var result = await knex.select(["id", "email", "name"]).table("users");
            return {
                status: true,
                result
            }
        } catch (err) {
            return {
                status: false,
                error: err
            }
        }
    }

    async update(id, email, name) {
        const user = await this.findById(id)
        if (user.status != false) {
            var editUser = {}
            if (email != undefined) {
                if (email != user.result[0].email) {
                    const result = await this.findEmail(email)
                    if (!result) {
                        editUser.email = email
                    }else{
                        return {
                            status: false,
                            error: "Email já está cadastrado!"
                        }
                    }
                }
            }
            else{
                return {
                    status: false,
                    error: "Email inválido!"
                }
            }
            if(name != undefined){
                editUser.name = name
            }
            try{
                await knex.update(editUser).where({id}).table("users")
                return {
                    status: true,
                }
            }
            catch (error){
                return {
                    status: false,
                    error
                }
            }
        }
        else {
            return {
                status: false,
                error: "O usuário não existe!"
            }
        }

    }

    async findById(id) {
        try {
            var result = await knex.select(["id", "email", "name"]).where({ id }).table("users");
            if (result.length > 0) {
                return {
                    status: true,
                    result
                }
            } else {
                return {
                    status: false,
                    error: 'Nenhum usuário encontrado'
                }
            }
        } catch (err) {
            return {
                status: false,
                error: err
            }
        }
    }

    async findByEmail(email) {
        try {
            var result = await knex.select(["id","password", "email", "name"]).where({ email }).table("users");
            if (result.length > 0) {
                return {
                    status: true,
                    user: result[0]
                }
            } else {
                return {
                    status: false,
                    error: 'Nenhum usuário encontrado'
                }
            }
        } catch (err) {
            return {
                status: false,
                error: err
            }
        }
    }

    async findByEmail2(email) {
        try {
            var result = await knex.select(["id", "email", "name"]).where({ email }).table("users");
            if (result.length > 0) {
                return {
                    status: true,
                    user: result[0]
                }
            } else {
                return {
                    status: false,
                    error: 'Nenhum usuário encontrado'
                }
            }
        } catch (err) {
            return {
                status: false,
                error: err
            }
        }
    }

    async delete(id) {
        const user = await this.findById(id)
        if(user.error){
            return {
                status: false,
                error: "O usuário não existe!"
            }
        }else{
            try {
                await knex.delete().where({id}).table("users");
                return {
                    status: true,
                    result: 'Deletado com sucesso!'
                }
            } catch (error) {
                return {
                    status: false,
                    error
                }
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
            await knex.insert({ name, email, password: hash }).table("users")
            return {
                status: true
            }
        } catch (err) {
            return {
                status: false,
                error: err
            }
        }
    }
}

module.exports = new User()