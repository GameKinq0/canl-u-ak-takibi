const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/api/flights', async (req, res) => {
  try {
    const response = await axios.get('https://adsbexchange.com/api/aircraft/json');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching flight data');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
