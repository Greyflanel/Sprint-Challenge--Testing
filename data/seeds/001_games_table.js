
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {title: 'So Sad', genre: 'Rap', releaseYear: 2033},
        {title: 'Me Mad', genre: 'Rap', releaseYear: 2057},
        {title: 'Too bad', genre: 'Rap', releaseYear: 2066}
      ]);
    });
};
