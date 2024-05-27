const express = require('express');
const router = express.Router();
const benefitController = require('../controllers/benefitController');

router.get('/', benefitController.getBenefits);
router.post('/', benefitController.createBenefit);

module.exports = router;
