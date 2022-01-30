const router = require('express').Router();
const { Vax, Pet } = require('../../models');
const withAuth = require('../../utils/auth');

// *** /api/vax *** - endpoint

router.get('/', async (req, res) => {
  try {
    const vaxDb = await Vax.findAll({include: [{model: Pet}]});
    res.status(200).json(vaxDb);
  } catch (err) {
      res.status(500).json;
  }
})

router.post('/', async (req, res) => {
    try {
      const newVax = await Vax.create({
          vax_name: req.body.vax_name,
          administered_date: req.body.administered_date,
          next_due: req.body.next_due,
          pet_id: req.body.pet_id,
      });
      res.status(200).json(newVax);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const vaxData = await Vax.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!vaxData) {
        res.status(404).json({ message: 'No vaccine found with this id!' });
        return;
      }
  
      res.status(200).json(vaxData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;