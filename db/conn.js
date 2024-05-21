const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("nodesequelize", "root", "",{
    host:"localhost",
    dialect: "mysql",
})

// try{
//     sequelize.authenticate(),
//     console.log("Conectamos com sucesso com Sequelize")
// } catch(err){
//     console.log("Nao foi possivel conectar", err)
// }

module.exports = sequelize
