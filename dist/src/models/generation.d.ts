import { z } from "zod";
import { NamedAPIResource } from "./namedapiresource";
import { GenerationNames } from "./generationnames";
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
export declare namespace Generation$ {
    type Inbound = {
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
    const inboundSchema: z.ZodType<Generation, z.ZodTypeDef, Inbound>;
    type Outbound = {
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
    const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Generation>;
}
//# sourceMappingURL=generation.d.ts.map