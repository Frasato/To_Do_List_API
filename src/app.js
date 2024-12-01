require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/task', taskRoutes);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running in port ${PORT}`);
    });
}).catch(err => {
    console.error('Error connection on database: ', err);
});