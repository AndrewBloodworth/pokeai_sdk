import { describe, it, expect } from "vitest";
import { Pokemons } from "../src/sdk/pokemons";

const pokemon = new Pokemons({});

describe("Pokemons SDK", () => {
  describe("findOne", () => {
    it("should fetch a Pokémon by name", async () => {
      const result = await pokemon.findOne("pikachu");
      expect(result.statusCode).toBe(200);
      expect(result.classes?.name).toBe("pikachu");
    });

    it("should fetch a Pokémon by ID", async () => {
      const result = await pokemon.findOne(25);
      expect(result.statusCode).toBe(200);
      expect(result.classes?.name).toBe("pikachu");
    });
  });

  describe("findAll", () => {
    it("should return a list of Pokémon", async () => {
      const result = await pokemon.findAll({ limit: 5 });
      expect(result.statusCode).toBe(200);
      expect(result.classes?.results.length).toBeGreaterThan(0);
    });

    it("should support pagination via .next()", async () => {
      const page1 = await pokemon.findAll({ limit: 2 });
      expect(page1.statusCode).toBe(200);
      expect(page1.classes?.results.length).toBe(2);

      const page2 = await page1.next?.();
      expect(page2?.statusCode).toBe(200);
      expect(page2?.classes?.results.length).toBe(2);
    });
  });
  describe("error handling", () => {
    it("should throw an APIError when Pokémon is not found", async () => {
      try {
        await pokemon.findOne("not-a-real-pokemon");
        throw new Error("Expected error was not thrown");
      } catch (error: any) {
        expect(error.name).toBe("APIError");
        expect(error.code).toBe("404");
      }
    });

    it("should throw an APIError when given an invalid ID", async () => {
      try {
        await pokemon.findOne(-999);
        throw new Error("Expected error was not thrown");
      } catch (error: any) {
        expect(error.name).toBe("APIError");
        expect(error.code).toBe("404");
      }
    });
  });
});
