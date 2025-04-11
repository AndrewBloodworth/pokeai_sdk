import { z } from "zod";
import { NamedAPIResource, NamedAPIResource$ } from "./namedapiresource";
import { GenerationNames, GenerationNames$ } from "./generationnames";
export type Generation = {
  /**
   * The ID of the generation.
   */
  id: number;

  /**
   * The name of the generation.
   */
  name: string;

  /**
   * A list of abilities introduced in this generation.
   */
  abilities: Array<NamedAPIResource>;

  /**
   * The main region associated with this generation.
   */
  main_region: NamedAPIResource;

  /**
   * A list of moves introduced in this generation.
   */
  moves: Array<NamedAPIResource>;

  /**
   * A list of localized names for the generation.
   */
  names: Array<GenerationNames>;

  /**
   * A list of Pokémon species introduced in this generation.
   */
  pokemon_species: Array<NamedAPIResource>;

  /**
   * A list of types introduced in this generation.
   */
  types: Array<NamedAPIResource>;

  /**
   * A list of version groups included in this generation.
   */
  version_groups: Array<NamedAPIResource>;
};

/** @internal */
export namespace Generation$ {
  export type Inbound = {
    id: number;
    name: string;
    abilities: Array<NamedAPIResource>;
    main_region: NamedAPIResource;
    moves: Array<NamedAPIResource>;
    names: Array<GenerationNames>;
    pokemon_species: Array<NamedAPIResource>;
    types: Array<NamedAPIResource>;
    version_groups: Array<NamedAPIResource>;
  };

  export const inboundSchema: z.ZodType<Generation, z.ZodTypeDef, Inbound> = z
    .object({
      id: z.number(),
      name: z.string(),
      abilities: z.array(NamedAPIResource$),
      main_region: NamedAPIResource$,
      moves: z.array(NamedAPIResource$),
      names: z.array(GenerationNames$),
      pokemon_species: z.array(NamedAPIResource$),
      types: z.array(NamedAPIResource$),
      version_groups: z.array(NamedAPIResource$),
    })
    .transform((v) => {
      return {
        id: v.id,
        name: v.name,
        abilities: v.abilities,
        main_region: v.main_region,
        moves: v.moves,
        names: v.names,
        pokemon_species: v.pokemon_species,
        types: v.types,
        version_groups: v.version_groups,
      };
    });

  export type Outbound = {
    id: number;
    name: string;
    abilities: Array<NamedAPIResource>;
    main_region: NamedAPIResource;
    moves: Array<NamedAPIResource>;
    names: Array<GenerationNames>;
    pokemon_species: Array<NamedAPIResource>;
    types: Array<NamedAPIResource>;
    version_groups: Array<NamedAPIResource>;
  };

  export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Generation> = z
    .object({
      id: z.number(),
      name: z.string(),
      abilities: z.array(NamedAPIResource$),
      main_region: NamedAPIResource$,
      moves: z.array(NamedAPIResource$),
      names: z.array(GenerationNames$),
      pokemon_species: z.array(NamedAPIResource$),
      types: z.array(NamedAPIResource$),
      version_groups: z.array(NamedAPIResource$),
    })
    .transform((v) => {
      return {
        id: v.id,
        name: v.name,
        abilities: v.abilities,
        main_region: v.main_region,
        moves: v.moves,
        names: v.names,
        pokemon_species: v.pokemon_species,
        types: v.types,
        version_groups: v.version_groups,
      };
    });
}
