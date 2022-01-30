const { Pet } = require('../models');

const petData = [
    {
        pet_name: 'Chance',
        pet_type: "Dog",
        gender: 'Male',
        breed: 'Yellow Lab',
        age: 4,
        vet_clinic: 'Fairway Knolls',
        vet_name: 'Dr. Smith',
        user_id: 1
    },
    {
        pet_name: 'Sassy',
        pet_type: "Cat",
        gender: 'Female',
        breed: 'Domestic Short Hair',
        age: 8,
        vet_clinic: 'Eastland Companion Animal Hospital',
        vet_name: 'Dr. Turner',
        user_id: 2
    },
    {
        pet_name: 'Shadow',
        pet_type: "Dog",
        gender: 'Male',
        breed: 'Doberman',
        age: 1,
        vet_clinic: 'Bortell Animal Hospital',
        vet_name: 'Dr. Bortell',
        user_id: 2
    },
    {
        pet_name: 'Bullseye',
        pet_type: "Horse",
        gender: 'Male',
        breed: 'Clydesdale',
        age: 10,
        vet_clinic: 'Iowa State Animal Hospital',
        vet_name: 'Dr. Ranger',
        user_id: 1
    },
    {
        pet_name: 'Sydney',
        pet_type: "Cat",
        gender: 'Female',
        breed: 'Domestic Short Hair',
        age: 17,
        vet_clinic: 'Ashland Animal Hospital',
        vet_name: 'Dr. Ryan',
        user_id: 4
    },
];

const seedPets = () => Pet.bulkCreate(petData);
module.exports = seedPets