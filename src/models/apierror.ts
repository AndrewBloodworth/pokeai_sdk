import { z } from "zod";

/**
 * An error occurred interacting with the API.
 */
export type APIErrorData = {
  code?: string | undefined;
  details?: Record<string, any> | undefined;
  message?: string | undefined;
};

/**
 * An error occurred interacting with the API.
 */
export class APIError extends Error {
  code?: string | undefined;
  details?: Record<string, any> | undefined;

  /** The original data that was passed to this error instance. */
  data$: APIErrorData;

  constructor(err: APIErrorData) {
    super("");
    this.data$ = err;

    if (err.code != null) {
      this.code = err.code;
    }
    if (err.details != null) {
      this.details = err.details;
    }

    const msg =
      "message" in err && typeof err.message === "string" ? err.message : "";
    const content = JSON.stringify(err);
    this.message = [msg, content].filter(Boolean).join("\n");

    this.name = "APIError";
  }
}

/** @internal */
export namespace APIError$ {
  export type Inbound = {
    code?: string | undefined;
    details?: Record<string, any> | undefined;
    message?: string | undefined;
  };
  export type Outbound = {
    code?: string | undefined;
    details?: Record<string, any> | undefined;
    message?: string | undefined;
  };

  export const inboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Inbound> = z
    .object({
      code: z.string().optional(),
      details: z.record(z.any()).optional(),
      message: z.string().optional(),
    })
    .transform((v) => {
      return {
        ...(v.code === undefined ? null : { code: v.code }),
        ...(v.details === undefined ? null : { details: v.details }),
        ...(v.message === undefined ? null : { message: v.message }),
      };
    });
}
