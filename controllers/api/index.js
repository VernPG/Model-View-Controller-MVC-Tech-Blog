const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./commentRoutes.js');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
//copied from lesson and need to update