const router = require('express').Router();
const withAuth = require('../utils/auth');
const upload = require("../middleware/upload");
// const path = require("path");
const fs = require("fs");
const {Pet, Meds, Vax, Dx, Image } = require('../models')
// const multer = require('multer')
// const upload = multer({dest: 'resources/static/assets/uploads/'})


// commented out while doing chart routes (this is the one we want)
router.get('/', (req, res) =>{
    if (req.session.loggedIn) {
        res.redirect('/profile')
       return;
    }
    res.render('loginhomepage')
})

//delete after making chart routes!
router.get('/login', (req, res) =>{
    // if (req.session.loggedIn) {
    //     res.redirect('/')
    //    return;
    // }
    res.render('chart')
})

router.get('/chart/:id', async (req, res) => {
 try {
  const chartData = await Pet.findOne({
    where: {
      id: req.params.id,
    },
    include: [{model: Meds}, {model: Dx}, {model: Vax}]});
    const pet = chartData.get({ plain: true });
    res.render('chart', {pet});
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/new', (req, res) =>{
    res.render('new-pet-form', {
        user_id: req.session.user_id,
    })
})

router.get('/profile', withAuth, async (req, res) => {
    try {
      const viewAllPets = await Pet.findAll({
      where: {
          user_id: req.session.user_id,
        }
      })
      const pets = viewAllPets.map((pet) => pet.get({ plain: true }));
      res.render('homepage', {
        pets,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.post('/upload', upload.single("file"), (req, res) => {
    try {
        console.log(req.file);
    
        if (req.file == undefined) {
          return res.send(`You must select a file.`);
        }
    

        Image.create({
          type: req.file.mimetype,
          name: req.file.originalname,
          pet_id: req.body.pet_id,
          data: fs.readFileSync(
            __basedir + "/resources/static/assets/uploads/" + req.file.filename
          ),
        }).then((image) => {
          console.log(image)
          fs.writeFileSync(
            __basedir + "/resources/static/assets/tmp/" + image.name,
            image.data
          );
        });
    
          return res.send(`File has been uploaded.`);
      
      } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
      }
});



  

module.exports = router; 
