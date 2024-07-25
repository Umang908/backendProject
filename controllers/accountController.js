const Account = require('../models/account');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const sendmail = require('./sendMail');

// Create a new account
exports.createAccount = async (req, res) => {
    const { first_name, last_name, email, phone, password, birthday } = req.body;

    // validation for email.
    if (!validator.isEmail(email)) {
      return res.status(400).json({error: true, message: 'Invalid email format',code : 400 });
    }

      // validation for Phone Number.
    if (!validator.isMobilePhone(phone, 'any', { strictMode: true })) {
      return res.status(400).json({error: true, message: 'Invalid phone number format',code : 400 });
    }

    // Validate for Birthday
    if (!validator.isDate(birthday) || new Date(birthday) > new Date()) {
      return res.status(400).json({error: true, message: 'Invalid or future birthday date',code : 400 });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 5);
      let isUserExists = await  Account.findOne({where : {email : email}});
      if(isUserExists){
        return res.status(400).json({error: true, message: 'Email Id Already Register',code : 400 });
      }
      const account = await Account.create({
        first_name,
        last_name,
        email,
        phone,
        password: hashedPassword,
        birthday,
      });
    //   sendmail('umangvarshney1234@gmail.com', 'Account Successfully Created', 'Hi Dear Your account has been cretated successfully.');
      res.status(201).json({error: false, message: 'Successfully Created',code : 201, data : {id : account.id, first_name : account.first_name, last_name : account.last_name, email : account.email, phone : account.phone} });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

// Get all accounts with pagination
exports.getAccounts = async (req, res) => {
    const { limit = 10, offset = 0 } = req.query;
    try {
      const accounts = await Account.findAll({ limit: parseInt(limit), offset: parseInt(offset) });
      res.status(200).json(accounts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

// Get account by ID
exports.getAccountById = async (req, res) => {
  const { id } = req.params;
  if(id != req.user.id){
    return res.status(400).json({error: true, message: 'Id and Token Mismatch',code : 400 });
  }
  try {
    const account = await Account.findByPk(id);
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update account
exports.updateAccount = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, phone, password, birthday } = req.body;
  try {
    const account = await Account.findByPk(id);
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    const hashedPassword = password ? await bcrypt.hash(password, 10) : account.password;
    await account.update({ first_name, last_name, email, phone, password: hashedPassword, birthday, last_modified: new Date() });
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete account
exports.deleteAccount = async (req, res) => {
  const { id } = req.params;
  if(id != req.user.id){
    return res.status(400).json({error: true, message: 'You did not remove this account',code : 400 });
  }
  try {
    const account = await Account.findByPk(id);
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    await account.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
