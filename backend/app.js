const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');

dotenv.config({path: path.join(__dirname, 'config','config.env')});

const products = require('./routes/product');
const orders = require('./routes/order'); 
const offers = require('./routes/offer');

connectDatabase();

app.use(express.json());
app.use(cors());

app.use('/api/v2/', products);
app.use('/api/v2/', orders);
app.use('/api/v2/', offers);


app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV}`);
});
