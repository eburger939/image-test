const { User } = require('../models');

const userData = [
    {
        username: 'hedbear',
        email: "bear@yahoo.com",
        password: "12345678910"
    },
    {
        username: 'sgarter',
        email: "garter@yahoo.com",
        password: "password"
    },
    {
        username: 'lillypad',
        email: "lilly@yahoo.com",
        password: "ilikepopcorn"
    },
    {
        username: 'ljohnson',
        email: "ljohnson@yahoo.com",
        password: "tillyriggs"
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
});
module.exports = seedUsers