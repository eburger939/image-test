const { Meds } = require('../models');

const medsData = [
    {
        medication: 'HeartGuard',
        last_given: 'January 1, 2022',
        next_due: "Februrary 1, 2022",
        pet_id: 1
    },
    {
        medication: 'Advantix',
        last_given: 'January 15, 2022',
        next_due: "Februrary 15, 2022",
        pet_id: 1
    },
];

const seedMeds = () => Meds.bulkCreate(medsData, {
    individualHooks: true,
    returning: true,
});
module.exports = seedMeds