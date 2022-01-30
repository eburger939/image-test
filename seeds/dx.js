const { Dx } = require('../models');

const dxData = [
    {
        diagnosis: 'Diabetes',
        pet_id: "1"
    },
    {
        diagnosis: 'Glaucoma',
        pet_id: "1"
    },
];

const seedDx = () => Dx.bulkCreate(dxData, {
    individualHooks: true,
    returning: true,
});
module.exports = seedDx