import { z } from "zod";
import { NamedAPIResource } from "./namedapiresource";
/**
 * The held items of a pokemon.
 */
export interface PokemonHeldItems {
    item: NamedAPIResource;
    version_details: Array<{
        rarity: number;
        version: NamedAPIResource;
    }>;
}
/** @internal */
export declare const PokemonHeldItems$: z.ZodObject<{
    item: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
    }, {
        name: string;
        url: string;
    }>;
    version_details: z.ZodArray<z.ZodObject<{
        rarity: z.ZodNumber;
        version: z.ZodObject<{
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
        version: {
            name: string;
            url: string;
        };
        rarity: number;
    }, {
        version: {
            name: string;
            url: string;
        };
        rarity: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    item: {
        name: string;
        url: string;
    };
    version_details: {
        version: {
            name: string;
            url: string;
        };
        rarity: number;
    }[];
}, {
    item: {
        name: string;
        url: string;
    };
    version_details: {
        version: {
            name: string;
            url: string;
        };
        rarity: number;
    }[];
}>;
//# sourceMappingURL=pokemonhelditems.d.ts.map