const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('../config/db');

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json());

const userRoutes = require('../routes/user');
const authRoutes = require('../routes/auth');

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
