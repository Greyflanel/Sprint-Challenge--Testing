const express = require('express');
const router = express.Router();
const db = require('./gameModel')

router.get('/', (req, res) => {
    db.findAll()
    .then(games => {
        res.status(200).json(games)
    })
    .catch(error => {
        res.status(500).json(error) 
    })
})

router.get('/:id', (req, res) => {
const id = req.params.id
    db.findById(id)
    .where({ id })
    .first()
    .then(games => {
        res.status(200).json(games);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error);
    })
})

router.post('/', (req, res) => {

            if(!req.body.title) {
        return res.status(422).send({ message: 'missing game title'})
    } else if(!req.body.genre) {
        return res.status(422).send({ message: 'missing game genre'})
    } else {
        
        db.insert(req.body)
        .then(games => {
            res.status(201).json(games)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })    
}
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
        db.remove(id)
        .where({ id })
        .then(games => {
            res.status(200).json(games);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error);
        })
    })

    router.put('/:id', (req, res) => {
        const note = req.body;
        const id = req.params.id
        db.update(note, id)
        .where({ id })
        .then(games => {
            res.status(201).json(games)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error);
        })
    })
module.exports = router;