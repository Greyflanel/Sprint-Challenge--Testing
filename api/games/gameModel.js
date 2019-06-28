

const db = require('../../data/dbConfig');

const findAll = () => {
    return db('games')
}

const findById = (id) => {
    return db('games')
    .where({ id })
    .first()
}

const remove = (id) => {
return db('games')
.where({ id })
.del()
}

const insert = (body) => {
    return db('games')
    .insert(body, 'id')
    .then( ([id]) => {
        return findById(id)
    })
}

const update = (body, id) => {
return db('games')
.where({ id })
.update(body)
}

module.exports = {
    findAll,
    findById,
    remove,
    insert,
    update,
}