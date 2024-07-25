const express = require('express');
const sequelize = require('./config/database');
const accountRoutes = require('./routes/accountRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());

app.use('/api', accountRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT || 9000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
