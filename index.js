const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 5000;

app.get('/api/news', async (req, res) => {
  try {
    const { country, category, page, pageSize } = req.query;
    const apiKey = process.env.REACT_NEWS_API; // Replace with your actual API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}`;

    const response = await axios.get(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
