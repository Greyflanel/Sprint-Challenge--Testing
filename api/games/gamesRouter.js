const express = require('express');
const router = express.Router();
const db = require('./gameModel');


router.get('/', (req, res) => {
db.findAll()
.then(games => {
    res.status(200).json(games)
})
.catch(error => {
    res.status(500).json(error)
})
})

router.post('/', async (req, res) => {
    try {
      const [id] = await db('games').insert(req.body);
  
      const games = await db('games')
        .where({ id })
        .first();
  
      res.status(201).json(games);
    } catch (error) {
      const message = errors[error.errno] || 'We ran into an error';
      res.status(500).json({ message, error });
    }
  });


module.exports = router;