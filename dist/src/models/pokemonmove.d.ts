import { z } from "zod";
import { NamedAPIResource } from "./namedapiresource";
/**
 * The moves of pokemon.
 */
export interface PokemonMove {
    move: NamedAPIResource;
    version_group_details: Array<{
        level_learned_at: number;
        version_group: NamedAPIResource;
        move_learn_method: NamedAPIResource;
    }>;
}
/** @internal */
export declare const PokemonMove$: z.ZodObject<{
    move: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        url: string;
    }, {
        name: string;
        url: string;
    }>;
    version_group_details: z.ZodArray<z.ZodObject<{
        level_learned_at: z.ZodNumber;
        version_group: z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            url: string;
        }, {
            name: string;
            url: string;
        }>;
        move_learn_method: z.ZodObject<{
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
        level_learned_at: number;
        version_group: {
            name: string;
            url: string;
        };
        move_learn_method: {
            name: string;
            url: string;
        };
    }, {
        level_learned_at: number;
        version_group: {
            name: string;
            url: string;
        };
        move_learn_method: {
            name: string;
            url: string;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    move: {
        name: string;
        url: string;
    };
    version_group_details: {
        level_learned_at: number;
        version_group: {
            name: string;
            url: string;
        };
        move_learn_method: {
            name: string;
            url: string;
        };
    }[];
}, {
    move: {
        name: string;
        url: string;
    };
    version_group_details: {
        level_learned_at: number;
        version_group: {
            name: string;
            url: string;
        };
        move_learn_method: {
            name: string;
            url: string;
        };
    }[];
}>;
//# sourceMappingURL=pokemonmove.d.ts.map