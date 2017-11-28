const mongoose = require('mongoose');

const api = {};

api.setup = (User) => (req, res) => {
  const admin = new User({
    username: 'admin',
    password: 'admin',
    clients: []
  });

  admin.save(error => {
    if (error) throw error;

    console.log('Admin account was successfully set up');
    res.json({
      success: true
    });
  })
}
