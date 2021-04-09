var User = require('../models/User')
class UserController{

  async index (req, res) {
    const users = await User.findAll();
    if(users.error) {
      res.status(500).json({
        error: "Erro no servidor! " + resultDescription.error
      })
    }else{
      res.json(users)
    }
  }

  async create(req, res){

    var {name, email, password, confirmPassword} = req.body

    if (email == undefined){
      res.status(403).json({err: "O e-mail é invalido"})
    }
    else if (name == undefined){
      res.status(403).json({err: "O nome é invalido"})
    }
    else if (password == undefined){
      res.status(403).json({err: "O password é invalido"})
    }
    else if (confirmPassword == undefined){
      res.status(403).json({err: "A confirmação de senha é invalida"})
    }
    else if(confirmPassword !== password){
      res.status(403).json({err: "As senhas não coincidem"})
    }
    else{
      const respEmail = await User.findEmail(email)
      if(respEmail) {
        res.status(500).json({
          error: "Email já está cadastrado!"
        })
        return
      }
      const resultDescription = await User.new(name, email, password)
      if(resultDescription.error){
        res.status(500).json({
          error: "Erro no servidor! " + resultDescription.error
        })
      }
      else{
        res.status(200).json({
          description: "Criado com sucesso!"
        })
      }
    }
  }
  
}

module.exports = new UserController();