const { Vax } = require('../models');

const vaxData = [
    {
        vax_name: 'parvovirus',
        administered_date: 'January 28, 2022',
        next_due: 'January 28, 2023',
        pet_id: 1
    },
    {
        vax_name: 'rabies',
        administered_date: 'December 12, 2021',
        next_due: 'May 12, 2022',
        pet_id: 1
    },
    {
        vax_name: 'adenovirus',
        administered_date: 'October 27, 2021',
        next_due: 'October 27, 2025',
        pet_id: 1
    },
    {
        vax_name: 'hepatitis',
        administered_date: 'September 22, 2021',
        next_due: 'March 22, 2022',
        pet_id: 1
    }
];

const seedVaxs = () => Vax.bulkCreate(vaxData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedVaxs