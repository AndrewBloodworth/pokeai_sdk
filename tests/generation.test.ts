import { describe, it, expect } from "vitest";
import { Generations } from "../src/sdk/generations";

const generation = new Generations({});

describe("Generation SDK", () => {
  describe("findOne", () => {
    it("should fetch a Generation by name", async () => {
      const result = await generation.findOne("generation-i");
      expect(result.statusCode).toBe(200);
      expect(result.classes?.name).toBe("generation-i");
    });

    it("should fetch a Generation by ID", async () => {
      const result = await generation.findOne(1);
      expect(result.statusCode).toBe(200);
      expect(result.classes?.name).toBe("generation-i");
    });
  });

  describe("findAll", () => {
    it("should return a list of Generation", async () => {
      const result = await generation.findAll({ limit: 5 });
      expect(result.statusCode).toBe(200);
      expect(result.classes?.results.length).toBeGreaterThan(0);
    });

    it("should support pagination via .next()", async () => {
      const page1 = await generation.findAll({ limit: 2 });
      expect(page1.statusCode).toBe(200);
      expect(page1.classes?.results.length).toBe(2);

      const page2 = await page1.next?.();
      expect(page2?.statusCode).toBe(200);
      expect(page2?.classes?.results.length).toBe(2);
    });
  });
  describe("error handling", () => {
    it("should throw an APIError when Generation is not found", async () => {
      try {
        await generation.findOne("not-a-real-pokemon");
        throw new Error("Expected error was not thrown");
      } catch (error: any) {
        expect(error.name).toBe("APIError");
        expect(error.code).toBe("404");
      }
    });

    it("should throw an APIError when given an invalid ID", async () => {
      try {
        await generation.findOne(-999);
        throw new Error("Expected error was not thrown");
      } catch (error: any) {
        expect(error.name).toBe("APIError");
        expect(error.code).toBe("404");
      }
    });
  });
});
