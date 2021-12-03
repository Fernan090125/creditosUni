const {Router} = require('express');
const router = Router();
const {NewCredit,RenovateCredit}=require('../controllers/credit_Controller');

router.post('/credit/:id',NewCredit);
router.put('/credit/:id',RenovateCredit);




module.exports = router;