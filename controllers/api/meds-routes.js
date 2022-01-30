const router = require('express').Router();
const { Meds, Pet } = require('../../models');
const withAuth = require('../../utils/auth');

// *** /api/meds *** - endpoint

router.get('/', async (req, res) => {
  try {
    const medsDb = await Meds.findAll({include: [{model: Pet}]});
    res.status(200).json(medsDb);
  } catch (err) {
      res.status(500).json;
  }
})

router.post('/', async (req, res) => {
    try {
      const newMed = await Meds.create({
          medication: req.body.medication,
          last_given: req.body.last_given,
          next_due: req.body.next_due,
          pet_id: req.body.pet_id,
      });
      res.status(200).json(newMed);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const medData = await Meds.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!medData) {
        res.status(404).json({ message: 'No medication found with this id!' });
        return;
      }
  
      res.status(200).json(medData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;