const router = require('express').Router();
const { Dx, Pet } = require('../../models');
const withAuth = require('../../utils/auth');

// *** /api/dx *** - endpoint

router.get('/', async (req, res) => {
  try {
    const dxDb = await Dx.findAll({include: [{model: Pet}]});
    res.status(200).json(dxDb);
  } catch (err) {
      res.status(500).json;
  }
})

router.post('/', async (req, res) => {
    try {
      const newDx = await Dx.create({
          diagnosis: req.body.diagnosis,
          pet_id: req.body.pet_id,
      });
      res.status(200).json(newDx);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const dxData = await Dx.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!dxData) {
        res.status(404).json({ message: 'No diagnosis found with this id!' });
        return;
      }
  
      res.status(200).json(dxData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;