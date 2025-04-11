"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonSprites$ = void 0;
const zod_1 = require("zod");
/** @internal */
exports.PokemonSprites$ = zod_1.z.object({
    back_default: zod_1.z.string().nullable(),
    back_female: zod_1.z.string().nullable(),
    back_shiny: zod_1.z.string().nullable(),
    back_shiny_female: zod_1.z.string().nullable(),
    front_default: zod_1.z.string().nullable(),
    front_female: zod_1.z.string().nullable(),
    front_shiny: zod_1.z.string().nullable(),
    front_shiny_female: zod_1.z.string().nullable(),
    other: zod_1.z.object({
        dream_world: zod_1.z.object({
            front_default: zod_1.z.string().nullable(),
            front_female: zod_1.z.string().nullable(),
        }),
        home: zod_1.z.object({
            front_default: zod_1.z.string().nullable(),
            front_female: zod_1.z.string().nullable(),
            front_shiny: zod_1.z.string().nullable(),
            front_shiny_female: zod_1.z.string().nullable(),
        }),
        "official-artwork": zod_1.z.object({
            front_default: zod_1.z.string().nullable(),
            front_shiny: zod_1.z.string().nullable(),
        }),
        showdown: zod_1.z.object({
            back_default: zod_1.z.string().nullable(),
            back_female: zod_1.z.string().nullable(),
            back_shiny: zod_1.z.string().nullable(),
            back_shiny_female: zod_1.z.string().nullable(),
            front_default: zod_1.z.string().nullable(),
            front_female: zod_1.z.string().nullable(),
            front_shiny: zod_1.z.string().nullable(),
            front_shiny_female: zod_1.z.string().nullable(),
        }),
    }),
    versions: zod_1.z.object({
        "generation-i": zod_1.z.object({
            "red-blue": zod_1.z.object({
                back_default: zod_1.z.string().nullable(),
                back_gray: zod_1.z.string().nullable(),
                front_default: zod_1.z.string().nullable(),
                front_gray: zod_1.z.string().nullable(),
            }),
            yellow: zod_1.z.object({
                back_default: zod_1.z.string().nullable(),
                back_gray: zod_1.z.string().nullable(),
                front_default: zod_1.z.string().nullable(),
                front_gray: zod_1.z.string().nullable(),
            }),
        }),
        "generation-ii": zod_1.z.object({
            crystal: zod_1.z.object({
                back_default: zod_1.z.string().nullable(),
                back_shiny: zod_1.z.string().nullable(),
                front_default: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
            }),
            gold: zod_1.z.object({
                back_default: zod_1.z.string().nullable(),
                back_shiny: zod_1.z.string().nullable(),
                front_default: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
            }),
            silver: zod_1.z.object({
                back_default: zod_1.z.string().nullable(),
                back_shiny: zod_1.z.string().nullable(),
                front_default: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
            }),
        }),
        "generation-iii": zod_1.z.object({
            emerald: zod_1.z.object({
                front_default: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
            }),
            "firered-leafgreen": zod_1.z.object({
                back_default: zod_1.z.string().nullable(),
                back_shiny: zod_1.z.string().nullable(),
                front_default: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
            }),
            "ruby-sapphire": zod_1.z.object({
                back_default: zod_1.z.string().nullable(),
                back_shiny: zod_1.z.string().nullable(),
                front_default: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
            }),
        }),
        "generation-iv": zod_1.z.object({
            "diamond-pearl": zod_1.z.object({
                back_default: zod_1.z.string().nullable(),
                back_female: zod_1.z.string().nullable(),
                back_shiny: zod_1.z.string().nullable(),
                back_shiny_female: zod_1.z.string().nullable(),
                front_default: zod_1.z.string().nullable(),
                front_female: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
                front_shiny_female: zod_1.z.string().nullable(),
            }),
            "heartgold-soulsilver": zod_1.z.object({
                back_default: zod_1.z.string().nullable(),
                back_female: zod_1.z.string().nullable(),
                back_shiny: zod_1.z.string().nullable(),
                back_shiny_female: zod_1.z.string().nullable(),
                front_default: zod_1.z.string().nullable(),
                front_female: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
                front_shiny_female: zod_1.z.string().nullable(),
            }),
            platinum: zod_1.z.object({
                back_default: zod_1.z.string().nullable(),
                back_female: zod_1.z.string().nullable(),
                back_shiny: zod_1.z.string().nullable(),
                back_shiny_female: zod_1.z.string().nullable(),
                front_default: zod_1.z.string().nullable(),
                front_female: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
                front_shiny_female: zod_1.z.string().nullable(),
            }),
        }),
        "generation-v": zod_1.z.object({
            "black-white": zod_1.z.object({
                animated: zod_1.z.object({
                    back_default: zod_1.z.string().nullable(),
                    back_female: zod_1.z.string().nullable(),
                    back_shiny: zod_1.z.string().nullable(),
                    back_shiny_female: zod_1.z.string().nullable(),
                    front_default: zod_1.z.string().nullable(),
                    front_female: zod_1.z.string().nullable(),
                    front_shiny: zod_1.z.string().nullable(),
                    front_shiny_female: zod_1.z.string().nullable(),
                }),
                back_default: zod_1.z.string().nullable(),
                back_female: zod_1.z.string().nullable(),
                back_shiny: zod_1.z.string().nullable(),
                back_shiny_female: zod_1.z.string().nullable(),
                front_default: zod_1.z.string().nullable(),
                front_female: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
                front_shiny_female: zod_1.z.string().nullable(),
            }),
        }),
        "generation-vi": zod_1.z.object({
            "omegaruby-alphasapphire": zod_1.z.object({
                front_default: zod_1.z.string().nullable(),
                front_female: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
                front_shiny_female: zod_1.z.string().nullable(),
            }),
            "x-y": zod_1.z.object({
                front_default: zod_1.z.string().nullable(),
                front_female: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
                front_shiny_female: zod_1.z.string().nullable(),
            }),
        }),
        "generation-vii": zod_1.z.object({
            icons: zod_1.z.object({
                front_default: zod_1.z.string().nullable(),
                front_female: zod_1.z.string().nullable(),
            }),
            "ultra-sun-ultra-moon": zod_1.z.object({
                front_default: zod_1.z.string().nullable(),
                front_female: zod_1.z.string().nullable(),
                front_shiny: zod_1.z.string().nullable(),
                front_shiny_female: zod_1.z.string().nullable(),
            }),
        }),
        "generation-viii": zod_1.z.object({
            icons: zod_1.z.object({
                front_default: zod_1.z.string().nullable(),
                front_female: zod_1.z.string().nullable(),
            }),
        }),
    }),
});
//# sourceMappingURL=pokemonsprites.js.map