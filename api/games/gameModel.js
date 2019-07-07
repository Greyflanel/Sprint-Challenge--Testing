

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

async function insert(game) {
    const [id] = await db('games')
    .insert(game);
    return db('games')
    .where({ id })
    .first();
}
 
// const insert = (body) => {
//     return db('games')
//     .insert(body, 'id')
//     .then( ([id]) => {
//         return findById(id)
//     })
// }

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