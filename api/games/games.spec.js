const request = require("supertest");
const server = require("../server");

const db = require("../../data/dbConfig.js");
const Games = require("./gameModel.js");

describe("game model", () => {
  beforeEach(async () => {
    await db("games").truncate();
  });

  describe("GET /", () => {
    it("should return 200", async () => {
      const res = await request(server).get("/api/games");
      expect(res.status).toBe(200);
    });

    it("should return true", async () => {
      const res = await request(server).get("/api/games");
      expect(Array.isArray(res.body)).toBe(true);
    });

    it("should return json type", async () => {
      const res = await request(server).get("/api/games");
      expect(res.type).toBe("application/json");
    });
  });

  describe("INSERT /", () => {
    it("should insert the provided games into the db", async () => {
      await Games.insert({ title: "Pacman", genre: "Arcade", releaseYear: 1981 });
      await Games.insert({ title: "Galaga", genre: "Arcade", releaseYear: 1984 });

      const games = await db("games");
      
      expect(games).toHaveLength(2);
      expect(games[0].title).toBe("Pacman");
    });

    it("should return the new game on insert", async () => {
      const game = await Games.insert({ title: "Asteroids", genre: "Arcade", releaseYear: 1984 });

      expect(game).toEqual({ id: 1, title: "Asteroids", genre: "Arcade", releaseYear: 1984 });
    });
  });
});
