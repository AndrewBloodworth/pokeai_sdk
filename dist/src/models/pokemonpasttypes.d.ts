import { z } from "zod";
import { NamedAPIResource } from "./namedapiresource";
import { PokemonType } from "./pokemontypes";
/**
 * The past types of a pokemon.
 */
export interface PokemonPastType {
    generation: NamedAPIResource;
    types: Array<PokemonType>;
}
/** @internal */
export declare const PokemonPastType$: z.ZodObject<{
    generation: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
    }, {
        name: string;
        url: string;
    }>;
    types: z.ZodArray<z.ZodObject<{
        slot: z.ZodNumber;
        type: z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            url: string;
        }, {
            name: string;
            url: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: {
            name: string;
            url: string;
        };
        slot: number;
    }, {
        type: {
            name: string;
            url: string;
        };
        slot: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    types: {
        type: {
            name: string;
            url: string;
        };
        slot: number;
    }[];
    generation: {
        name: string;
        url: string;
    };
}, {
    types: {
        type: {
            name: string;
            url: string;
        };
        slot: number;
    }[];
    generation: {
        name: string;
        url: string;
    };
}>;
//# sourceMappingURL=pokemonpasttypes.d.ts.map