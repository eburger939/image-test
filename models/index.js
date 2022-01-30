const  Pet = require('./Pet')
const  User= require('./User')
const Dx = require('./Dx')
const Meds = require('./Meds')
const Vax = require('./Vax')
const Image = require('./image.model')


User.hasMany(Pet, {
    foreignKey: 'user_id'
})

Pet.belongsTo(User, {
    foreignKey: 'user_id'
})

Pet.hasMany(Dx, {
    foreignKey: 'pet_id'
})

Dx.belongsTo(Pet, {
    foreignKey: 'pet_id'
})

Pet.hasMany(Meds, {
    foreignKey: 'pet_id'
})
Meds.belongsTo(Pet, {
    foreignKey: 'pet_id'
})

Pet.hasMany(Vax, {
    foreignKey: 'pet_id'
})

Vax.belongsTo(Pet, {
    foreignKey: 'pet_id'
})

Pet.hasOne(Image, {
    foreignKey: 'pet_id'
})

Image.belongsTo(Pet, {
    foreignKey: 'pet_id'
})

module.exports = { Pet, User, Dx, Meds, Vax, Image }