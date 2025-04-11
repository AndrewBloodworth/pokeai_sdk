import { z } from "zod";
import { ErrorT, ErrorT$ } from "./error";
import { Pokemon, Pokemon$ } from "./pokemon";
export type GetPokemonRequest = {
    /**
     * Id or name of the pokemon.
     */
    idOrName: string | number;
};
export type GetPokemonResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * An unknown error occurred interacting with the API.
     */
    error?: ErrorT | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * A pokemon.
     */
    classes?: Pokemon | undefined;
};
/** @internal */
export declare namespace GetPokemonRequest$ {
    type Inbound = {
        idOrName: string | number;
    };
    const inboundSchema: z.ZodType<GetPokemonRequest, z.ZodTypeDef, Inbound>;
    type Outbound = {
        idOrName: string | number;
    };
    const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPokemonRequest>;
}
/** @internal */
export declare namespace GetPokemonsResponse$ {
    type Inbound = {
        ContentType: string;
        Error?: ErrorT$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
        classes?: Pokemon$.Inbound | undefined;
    };
    const inboundSchema: z.ZodType<GetPokemonResponse, z.ZodTypeDef, Inbound>;
    type Outbound = {
        ContentType: string;
        Error?: ErrorT$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
        classes?: Pokemon$.Outbound | undefined;
    };
    const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPokemonResponse>;
}
//# sourceMappingURL=getpokemonop.d.ts.map