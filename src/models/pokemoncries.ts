import { z } from "zod";
/**
 * The cries of a pokemon.
 */
export interface PokemonCry {
  latest: string;
  legacy: string;
}

/** @internal */
export const PokemonCry$ = z.object({
  latest: z.string(),
  legacy: z.string(),
});
