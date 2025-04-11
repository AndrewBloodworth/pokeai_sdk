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
export declare class APIError extends Error {
    code?: string | undefined;
    details?: Record<string, any> | undefined;
    /** The original data that was passed to this error instance. */
    data$: APIErrorData;
    constructor(err: APIErrorData);
}
/** @internal */
export declare namespace APIError$ {
    type Inbound = {
        code?: string | undefined;
        details?: Record<string, any> | undefined;
        message?: string | undefined;
    };
    type Outbound = {
        code?: string | undefined;
        details?: Record<string, any> | undefined;
        message?: string | undefined;
    };
    const inboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Inbound>;
}
//# sourceMappingURL=apierror.d.ts.map