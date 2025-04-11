import { z } from "zod";
/**
 * The sprites of a pokemon.
 */
export interface PokemonSprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        };
        home: {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
        "official-artwork": {
            front_default: string | null;
            front_shiny: string | null;
        };
        showdown: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
    };
    versions: {
        "generation-i": {
            "red-blue": {
                back_default: string | null;
                back_gray: string | null;
                front_default: string | null;
                front_gray: string | null;
            };
            yellow: {
                back_default: string | null;
                back_gray: string | null;
                front_default: string | null;
                front_gray: string | null;
            };
        };
        "generation-ii": {
            crystal: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            gold: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            silver: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        };
        "generation-iii": {
            emerald: {
                front_default: string | null;
                front_shiny: string | null;
            };
            "firered-leafgreen": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            "ruby-sapphire": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        };
        "generation-iv": {
            "diamond-pearl": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "heartgold-soulsilver": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            platinum: {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-v": {
            "black-white": {
                animated: {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                };
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-vi": {
            "omegaruby-alphasapphire": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "x-y": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-vii": {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
            "ultra-sun-ultra-moon": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-viii": {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
        };
    };
}
/** @internal */
export declare const PokemonSprites$: z.ZodObject<{
    back_default: z.ZodNullable<z.ZodString>;
    back_female: z.ZodNullable<z.ZodString>;
    back_shiny: z.ZodNullable<z.ZodString>;
    back_shiny_female: z.ZodNullable<z.ZodString>;
    front_default: z.ZodNullable<z.ZodString>;
    front_female: z.ZodNullable<z.ZodString>;
    front_shiny: z.ZodNullable<z.ZodString>;
    front_shiny_female: z.ZodNullable<z.ZodString>;
    other: z.ZodObject<{
        dream_world: z.ZodObject<{
            front_default: z.ZodNullable<z.ZodString>;
            front_female: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            front_default: string | null;
            front_female: string | null;
        }, {
            front_default: string | null;
            front_female: string | null;
        }>;
        home: z.ZodObject<{
            front_default: z.ZodNullable<z.ZodString>;
            front_female: z.ZodNullable<z.ZodString>;
            front_shiny: z.ZodNullable<z.ZodString>;
            front_shiny_female: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        }, {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        }>;
        "official-artwork": z.ZodObject<{
            front_default: z.ZodNullable<z.ZodString>;
            front_shiny: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            front_default: string | null;
            front_shiny: string | null;
        }, {
            front_default: string | null;
            front_shiny: string | null;
        }>;
        showdown: z.ZodObject<{
            back_default: z.ZodNullable<z.ZodString>;
            back_female: z.ZodNullable<z.ZodString>;
            back_shiny: z.ZodNullable<z.ZodString>;
            back_shiny_female: z.ZodNullable<z.ZodString>;
            front_default: z.ZodNullable<z.ZodString>;
            front_female: z.ZodNullable<z.ZodString>;
            front_shiny: z.ZodNullable<z.ZodString>;
            front_shiny_female: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        }, {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        };
        home: {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
        "official-artwork": {
            front_default: string | null;
            front_shiny: string | null;
        };
        showdown: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
    }, {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        };
        home: {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
        "official-artwork": {
            front_default: string | null;
            front_shiny: string | null;
        };
        showdown: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
    }>;
    versions: z.ZodObject<{
        "generation-i": z.ZodObject<{
            "red-blue": z.ZodObject<{
                back_default: z.ZodNullable<z.ZodString>;
                back_gray: z.ZodNullable<z.ZodString>;
                front_default: z.ZodNullable<z.ZodString>;
                front_gray: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            }, {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            }>;
            yellow: z.ZodObject<{
                back_default: z.ZodNullable<z.ZodString>;
                back_gray: z.ZodNullable<z.ZodString>;
                front_default: z.ZodNullable<z.ZodString>;
                front_gray: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            }, {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            "red-blue": {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            };
            yellow: {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            };
        }, {
            "red-blue": {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            };
            yellow: {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            };
        }>;
        "generation-ii": z.ZodObject<{
            crystal: z.ZodObject<{
                back_default: z.ZodNullable<z.ZodString>;
                back_shiny: z.ZodNullable<z.ZodString>;
                front_default: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            }, {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            }>;
            gold: z.ZodObject<{
                back_default: z.ZodNullable<z.ZodString>;
                back_shiny: z.ZodNullable<z.ZodString>;
                front_default: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            }, {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            }>;
            silver: z.ZodObject<{
                back_default: z.ZodNullable<z.ZodString>;
                back_shiny: z.ZodNullable<z.ZodString>;
                front_default: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            }, {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            crystal: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            gold: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            silver: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        }, {
            crystal: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            gold: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            silver: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        }>;
        "generation-iii": z.ZodObject<{
            emerald: z.ZodObject<{
                front_default: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                front_default: string | null;
                front_shiny: string | null;
            }, {
                front_default: string | null;
                front_shiny: string | null;
            }>;
            "firered-leafgreen": z.ZodObject<{
                back_default: z.ZodNullable<z.ZodString>;
                back_shiny: z.ZodNullable<z.ZodString>;
                front_default: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            }, {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            }>;
            "ruby-sapphire": z.ZodObject<{
                back_default: z.ZodNullable<z.ZodString>;
                back_shiny: z.ZodNullable<z.ZodString>;
                front_default: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            }, {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            emerald: {
                front_default: string | null;
                front_shiny: string | null;
            };
            "firered-leafgreen": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            "ruby-sapphire": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        }, {
            emerald: {
                front_default: string | null;
                front_shiny: string | null;
            };
            "firered-leafgreen": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            "ruby-sapphire": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        }>;
        "generation-iv": z.ZodObject<{
            "diamond-pearl": z.ZodObject<{
                back_default: z.ZodNullable<z.ZodString>;
                back_female: z.ZodNullable<z.ZodString>;
                back_shiny: z.ZodNullable<z.ZodString>;
                back_shiny_female: z.ZodNullable<z.ZodString>;
                front_default: z.ZodNullable<z.ZodString>;
                front_female: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
                front_shiny_female: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            }, {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            }>;
            "heartgold-soulsilver": z.ZodObject<{
                back_default: z.ZodNullable<z.ZodString>;
                back_female: z.ZodNullable<z.ZodString>;
                back_shiny: z.ZodNullable<z.ZodString>;
                back_shiny_female: z.ZodNullable<z.ZodString>;
                front_default: z.ZodNullable<z.ZodString>;
                front_female: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
                front_shiny_female: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            }, {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            }>;
            platinum: z.ZodObject<{
                back_default: z.ZodNullable<z.ZodString>;
                back_female: z.ZodNullable<z.ZodString>;
                back_shiny: z.ZodNullable<z.ZodString>;
                back_shiny_female: z.ZodNullable<z.ZodString>;
                front_default: z.ZodNullable<z.ZodString>;
                front_female: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
                front_shiny_female: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            }, {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            "diamond-pearl": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "heartgold-soulsilver": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            platinum: {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        }, {
            "diamond-pearl": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "heartgold-soulsilver": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            platinum: {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        }>;
        "generation-v": z.ZodObject<{
            "black-white": z.ZodObject<{
                animated: z.ZodObject<{
                    back_default: z.ZodNullable<z.ZodString>;
                    back_female: z.ZodNullable<z.ZodString>;
                    back_shiny: z.ZodNullable<z.ZodString>;
                    back_shiny_female: z.ZodNullable<z.ZodString>;
                    front_default: z.ZodNullable<z.ZodString>;
                    front_female: z.ZodNullable<z.ZodString>;
                    front_shiny: z.ZodNullable<z.ZodString>;
                    front_shiny_female: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                }, {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                }>;
                back_default: z.ZodNullable<z.ZodString>;
                back_female: z.ZodNullable<z.ZodString>;
                back_shiny: z.ZodNullable<z.ZodString>;
                back_shiny_female: z.ZodNullable<z.ZodString>;
                front_default: z.ZodNullable<z.ZodString>;
                front_female: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
                front_shiny_female: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
                animated: {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                };
            }, {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
                animated: {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                };
            }>;
        }, "strip", z.ZodTypeAny, {
            "black-white": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
                animated: {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                };
            };
        }, {
            "black-white": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
                animated: {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                };
            };
        }>;
        "generation-vi": z.ZodObject<{
            "omegaruby-alphasapphire": z.ZodObject<{
                front_default: z.ZodNullable<z.ZodString>;
                front_female: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
                front_shiny_female: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            }, {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            }>;
            "x-y": z.ZodObject<{
                front_default: z.ZodNullable<z.ZodString>;
                front_female: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
                front_shiny_female: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            }, {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            "omegaruby-alphasapphire": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "x-y": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        }, {
            "omegaruby-alphasapphire": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "x-y": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        }>;
        "generation-vii": z.ZodObject<{
            icons: z.ZodObject<{
                front_default: z.ZodNullable<z.ZodString>;
                front_female: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                front_default: string | null;
                front_female: string | null;
            }, {
                front_default: string | null;
                front_female: string | null;
            }>;
            "ultra-sun-ultra-moon": z.ZodObject<{
                front_default: z.ZodNullable<z.ZodString>;
                front_female: z.ZodNullable<z.ZodString>;
                front_shiny: z.ZodNullable<z.ZodString>;
                front_shiny_female: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            }, {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
            "ultra-sun-ultra-moon": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        }, {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
            "ultra-sun-ultra-moon": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        }>;
        "generation-viii": z.ZodObject<{
            icons: z.ZodObject<{
                front_default: z.ZodNullable<z.ZodString>;
                front_female: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                front_default: string | null;
                front_female: string | null;
            }, {
                front_default: string | null;
                front_female: string | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
        }, {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        "generation-i": {
            "red-blue": {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            };
            yellow: {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            };
        };
        "generation-ii": {
            crystal: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            gold: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            silver: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        };
        "generation-iii": {
            emerald: {
                front_default: string | null;
                front_shiny: string | null;
            };
            "firered-leafgreen": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            "ruby-sapphire": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        };
        "generation-iv": {
            "diamond-pearl": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "heartgold-soulsilver": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            platinum: {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-v": {
            "black-white": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
                animated: {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                };
            };
        };
        "generation-vi": {
            "omegaruby-alphasapphire": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "x-y": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-vii": {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
            "ultra-sun-ultra-moon": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-viii": {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
        };
    }, {
        "generation-i": {
            "red-blue": {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            };
            yellow: {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            };
        };
        "generation-ii": {
            crystal: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            gold: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            silver: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        };
        "generation-iii": {
            emerald: {
                front_default: string | null;
                front_shiny: string | null;
            };
            "firered-leafgreen": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            "ruby-sapphire": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        };
        "generation-iv": {
            "diamond-pearl": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "heartgold-soulsilver": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            platinum: {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-v": {
            "black-white": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
                animated: {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                };
            };
        };
        "generation-vi": {
            "omegaruby-alphasapphire": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "x-y": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-vii": {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
            "ultra-sun-ultra-moon": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-viii": {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
        };
    }>;
}, "strip", z.ZodTypeAny, {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        };
        home: {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
        "official-artwork": {
            front_default: string | null;
            front_shiny: string | null;
        };
        showdown: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
    };
    versions: {
        "generation-i": {
            "red-blue": {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            };
            yellow: {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            };
        };
        "generation-ii": {
            crystal: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            gold: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            silver: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        };
        "generation-iii": {
            emerald: {
                front_default: string | null;
                front_shiny: string | null;
            };
            "firered-leafgreen": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            "ruby-sapphire": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        };
        "generation-iv": {
            "diamond-pearl": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "heartgold-soulsilver": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            platinum: {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-v": {
            "black-white": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
                animated: {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                };
            };
        };
        "generation-vi": {
            "omegaruby-alphasapphire": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "x-y": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-vii": {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
            "ultra-sun-ultra-moon": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-viii": {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
        };
    };
}, {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: {
        dream_world: {
            front_default: string | null;
            front_female: string | null;
        };
        home: {
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
        "official-artwork": {
            front_default: string | null;
            front_shiny: string | null;
        };
        showdown: {
            back_default: string | null;
            back_female: string | null;
            back_shiny: string | null;
            back_shiny_female: string | null;
            front_default: string | null;
            front_female: string | null;
            front_shiny: string | null;
            front_shiny_female: string | null;
        };
    };
    versions: {
        "generation-i": {
            "red-blue": {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            };
            yellow: {
                back_default: string | null;
                front_default: string | null;
                back_gray: string | null;
                front_gray: string | null;
            };
        };
        "generation-ii": {
            crystal: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            gold: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            silver: {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        };
        "generation-iii": {
            emerald: {
                front_default: string | null;
                front_shiny: string | null;
            };
            "firered-leafgreen": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
            "ruby-sapphire": {
                back_default: string | null;
                back_shiny: string | null;
                front_default: string | null;
                front_shiny: string | null;
            };
        };
        "generation-iv": {
            "diamond-pearl": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "heartgold-soulsilver": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            platinum: {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-v": {
            "black-white": {
                back_default: string | null;
                back_female: string | null;
                back_shiny: string | null;
                back_shiny_female: string | null;
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
                animated: {
                    back_default: string | null;
                    back_female: string | null;
                    back_shiny: string | null;
                    back_shiny_female: string | null;
                    front_default: string | null;
                    front_female: string | null;
                    front_shiny: string | null;
                    front_shiny_female: string | null;
                };
            };
        };
        "generation-vi": {
            "omegaruby-alphasapphire": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
            "x-y": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-vii": {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
            "ultra-sun-ultra-moon": {
                front_default: string | null;
                front_female: string | null;
                front_shiny: string | null;
                front_shiny_female: string | null;
            };
        };
        "generation-viii": {
            icons: {
                front_default: string | null;
                front_female: string | null;
            };
        };
    };
}>;
//# sourceMappingURL=pokemonsprites.d.ts.map