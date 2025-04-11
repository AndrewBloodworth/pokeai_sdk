import { z } from "zod";

export interface NamedAPIResource {
  name: string;
  url: string;
}

/** @internal */
export const NamedAPIResource$ = z.object({
  name: z.string(),
  url: z.string(),
});
