import { z } from "zod";
export type ErrorT = {
    code?: string | undefined;
    message?: string | undefined;
};
/** @internal */
export declare namespace ErrorT$ {
    type Inbound = {
        code?: string | undefined;
        message?: string | undefined;
    };
    const inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, Inbound>;
    type Outbound = {
        code?: string | undefined;
        message?: string | undefined;
    };
    const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorT>;
}
//# sourceMappingURL=error.d.ts.map