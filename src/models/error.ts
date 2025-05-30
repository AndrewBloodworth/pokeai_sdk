import { z } from "zod";

export type ErrorT = {
  code?: string | undefined;
  message?: string | undefined;
};

/** @internal */
export namespace ErrorT$ {
  export type Inbound = {
    code?: string | undefined;
    message?: string | undefined;
  };

  export const inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, Inbound> = z
    .object({
      code: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((v) => {
      return {
        ...(v.code === undefined ? null : { code: v.code }),
        ...(v.message === undefined ? null : { message: v.message }),
      };
    });

  export type Outbound = {
    code?: string | undefined;
    message?: string | undefined;
  };

  export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorT> = z
    .object({
      code: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((v) => {
      return {
        ...(v.code === undefined ? null : { code: v.code }),
        ...(v.message === undefined ? null : { message: v.message }),
      };
    });
}
