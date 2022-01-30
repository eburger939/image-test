const router = require('express').Router();
const userRoutes = require('./user-routes');
const petRoutes = require('./pet-routes');
const vaxRoutes = require('./vax-routes');
const medsRoutes = require('./meds-routes');
const dxRoutes = require('./dx-routes');

router.use('/user', userRoutes);
router.use('/pet', petRoutes);
router.use('/vax', vaxRoutes);
router.use('/meds', medsRoutes);
router.use('/dx', dxRoutes);


module.exports = router;