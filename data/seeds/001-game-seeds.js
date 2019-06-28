
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'Pacman',
          genre: 'Arcade',
          releaseYear: '1980'},
          {title: 'Galaga',
          genre: 'Arcade',
          releaseYear: '1982'},
          {title: 'Asteroids',
          genre: 'Arcade',
          releaseYear: '1979'},
      ]);
    });
};
