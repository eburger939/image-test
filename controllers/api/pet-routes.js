const router = require('express').Router();
const { Pet, Meds, Dx, Vax } = require('../../models');
const withAuth = require('../../utils/auth');


// router.get('/', async (req, res) => {
//   const viewAllPets = await Pet.findAll({
//     where: {
//       user_id: req.session.user_id,
//     }
//   });
//   res.json(viewAllPets);
// })

router.get('/chart/:id', async (req, res) => {
  try {
   const chartData = await Pet.findOne({
     where: {
       id: req.params.id,
     },
     include: [{model: Meds}, {model: Dx}, {model: Vax}]});
     const pet = chartData.get({ plain: true });
     //return pet;
    res.render('chart',
       {pet});
   } catch (err) {
     res.status(500).json(err);
   }
 })

router.get('/:id', async (req, res) => {
    try {
      const dbPetData = await Pet.findByPk(req.params.id);
      const newPetData = dbPetData.get({ plain: true });
      //res.render('handlebars', {pet, loggedIn: req.session.loggedIn})
      res.status(200).json(newPetData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
      const newPet = await Pet.create({
          pet_name: req.body.pet_name,
          pet_type: req.body.pet_type,
          gender: req.body.gender,
          breed: req.body.breed,
          age: req.body.age,
          vet_clinic: req.body.vet_clinic,
          vet_name: req.body.vet_name,
          user_id: req.body.user_id, // SHOULD GRAB owner_id from SESSION user_id
      });
      res.status(200).json(newPet);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //Update Pet by ID *** NOT WORKING AT THIS TIME ***
  router.put('/:id', async (req, res) => {
    try {
      const petData = await Pet.update(
        {
          pet_name: req.body.pet_name,
          pet_type: req.body.pet_type,
        },
        {
        where: {
          id: req.params.id
        }
      });
      if (!petData) {
        res.status(404).json({message: 'No pet found with this ID'});
        return;
      }
      res.status(200).json(petData);
    } catch (err){
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const petData = await Pet.destroy({
        where: {
          id: req.params.id,
          // user_id: req.session.user_id,
        },
      });
  
      if (!petData) {
        res.status(404).json({ message: 'No pet found with this id!' });
        return;
      }
  
      res.status(200).json(petData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;