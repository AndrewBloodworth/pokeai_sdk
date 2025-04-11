import { z } from "zod";
import { NamedAPIResource, NamedAPIResource$ } from "./namedapiresource";
import { PokemonType, PokemonType$ } from "./pokemontypes";
/**
 * The past types of a pokemon.
 */
export interface PokemonPastType {
  generation: NamedAPIResource;
  types: Array<PokemonType>;
}

/** @internal */
export const PokemonPastType$ = z.object({
  generation: NamedAPIResource$,
  types: z.array(PokemonType$),
});
