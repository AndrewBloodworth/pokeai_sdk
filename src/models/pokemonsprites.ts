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
export const PokemonSprites$ = z.object({
  back_default: z.string().nullable(),
  back_female: z.string().nullable(),
  back_shiny: z.string().nullable(),
  back_shiny_female: z.string().nullable(),
  front_default: z.string().nullable(),
  front_female: z.string().nullable(),
  front_shiny: z.string().nullable(),
  front_shiny_female: z.string().nullable(),
  other: z.object({
    dream_world: z.object({
      front_default: z.string().nullable(),
      front_female: z.string().nullable(),
    }),
    home: z.object({
      front_default: z.string().nullable(),
      front_female: z.string().nullable(),
      front_shiny: z.string().nullable(),
      front_shiny_female: z.string().nullable(),
    }),
    "official-artwork": z.object({
      front_default: z.string().nullable(),
      front_shiny: z.string().nullable(),
    }),
    showdown: z.object({
      back_default: z.string().nullable(),
      back_female: z.string().nullable(),
      back_shiny: z.string().nullable(),
      back_shiny_female: z.string().nullable(),
      front_default: z.string().nullable(),
      front_female: z.string().nullable(),
      front_shiny: z.string().nullable(),
      front_shiny_female: z.string().nullable(),
    }),
  }),
  versions: z.object({
    "generation-i": z.object({
      "red-blue": z.object({
        back_default: z.string().nullable(),
        back_gray: z.string().nullable(),
        front_default: z.string().nullable(),
        front_gray: z.string().nullable(),
      }),
      yellow: z.object({
        back_default: z.string().nullable(),
        back_gray: z.string().nullable(),
        front_default: z.string().nullable(),
        front_gray: z.string().nullable(),
      }),
    }),
    "generation-ii": z.object({
      crystal: z.object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      }),
      gold: z.object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      }),
      silver: z.object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      }),
    }),
    "generation-iii": z.object({
      emerald: z.object({
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      }),
      "firered-leafgreen": z.object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      }),
      "ruby-sapphire": z.object({
        back_default: z.string().nullable(),
        back_shiny: z.string().nullable(),
        front_default: z.string().nullable(),
        front_shiny: z.string().nullable(),
      }),
    }),
    "generation-iv": z.object({
      "diamond-pearl": z.object({
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      }),
      "heartgold-soulsilver": z.object({
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      }),
      platinum: z.object({
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      }),
    }),
    "generation-v": z.object({
      "black-white": z.object({
        animated: z.object({
          back_default: z.string().nullable(),
          back_female: z.string().nullable(),
          back_shiny: z.string().nullable(),
          back_shiny_female: z.string().nullable(),
          front_default: z.string().nullable(),
          front_female: z.string().nullable(),
          front_shiny: z.string().nullable(),
          front_shiny_female: z.string().nullable(),
        }),
        back_default: z.string().nullable(),
        back_female: z.string().nullable(),
        back_shiny: z.string().nullable(),
        back_shiny_female: z.string().nullable(),
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      }),
    }),
    "generation-vi": z.object({
      "omegaruby-alphasapphire": z.object({
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      }),
      "x-y": z.object({
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      }),
    }),
    "generation-vii": z.object({
      icons: z.object({
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
      }),
      "ultra-sun-ultra-moon": z.object({
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
        front_shiny: z.string().nullable(),
        front_shiny_female: z.string().nullable(),
      }),
    }),
    "generation-viii": z.object({
      icons: z.object({
        front_default: z.string().nullable(),
        front_female: z.string().nullable(),
      }),
    }),
  }),
});
