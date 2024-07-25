const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/create-account', accountController.createAccount);
router.get('/get-all-account', authMiddleware, accountController.getAccounts);
router.get('/get-account-by-id/:id', authMiddleware, accountController.getAccountById);
router.put('/update-account-by-id/:id', authMiddleware, accountController.updateAccount);
router.delete('/delete-account/:id', authMiddleware, accountController.deleteAccount);

module.exports = router;
