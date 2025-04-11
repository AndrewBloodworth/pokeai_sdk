import { z } from "zod";
import { NamedAPIResource, NamedAPIResource$ } from "./namedapiresource";
/**
 * The type of pokemon.
 */
export interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

/** @internal */
export const PokemonType$ = z.object({
  slot: z.number(),
  type: NamedAPIResource$,
});
