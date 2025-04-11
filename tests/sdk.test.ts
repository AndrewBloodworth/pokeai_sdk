import { describe, it, expect } from "vitest";
import { PokeAPI } from "../src";

const sdk = new PokeAPI();

describe("PokeAPI SDK", () => {
  describe("pokemon.findOne", () => {
    it("should fetch Pikachu by name", async () => {
      const res = await sdk.pokemon.findOne("pikachu");
      expect(res.statusCode).toBe(200);
      expect(res.classes?.name).toBe("pikachu");
    });

    it("should fetch Pokémon by ID", async () => {
      const res = await sdk.pokemon.findOne(25); // Pikachu
      expect(res.statusCode).toBe(200);
      expect(res.classes?.name).toBe("pikachu");
    });
  });

  describe("pokemon.findAll", () => {
    it("should fetch the first page of Pokémon", async () => {
      const res = await sdk.pokemon.findAll({ limit: 10 });
      expect(res.statusCode).toBe(200);
      expect(res.classes?.results.length).toBeGreaterThan(0);
    });

    it("should support pagination via .next()", async () => {
      const res = await sdk.pokemon.findAll({ limit: 5 });
      const nextPage = await res.next?.();
      expect(nextPage?.statusCode).toBe(200);
      expect(nextPage?.classes?.results.length).toBeGreaterThan(0);
    });
  });

  describe("generation.findOne", () => {
    it("should fetch a generation by name", async () => {
      const res = await sdk.generation.findOne("generation-i");
      expect(res.statusCode).toBe(200);
      expect(res.classes?.name).toBe("generation-i");
    });
  });

  describe("generation.findAll", () => {
    it("should fetch the first page of generations", async () => {
      const res = await sdk.generation.findAll({ limit: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.classes?.results.length).toBeGreaterThan(0);
    });

    it("should support pagination via .next()", async () => {
      const res = await sdk.generation.findAll({ limit: 1 });
      const nextPage = await res.next?.();
      expect(nextPage?.statusCode).toBe(200);
    });
  });
});
