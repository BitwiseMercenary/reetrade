const express = require('express')
export const router = express.Router()

router.get('/', function (req, res) {
  res.send('hello world')
});

router.get('/max-pain', function (req, res) {
    const { symbol } = req.query;
    res.send(`Max Pain for ${symbol}`);
  });
