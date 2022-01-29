module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "codingBC",
    DB: "image3_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };