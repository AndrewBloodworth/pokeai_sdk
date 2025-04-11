import { z } from "zod";
import { NamedAPIResource, NamedAPIResource$ } from "./namedapiresource";
/**
 * The stats of a pokemon.
 */
export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

/** @internal */
export const PokemonStats$ = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: NamedAPIResource$,
});
