import { SDKOptions } from "../lib/config";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as models from "../models";
import { Paginated } from "../types/operations";
export declare class Pokemons extends ClientSDK {
    private readonly options$;
    constructor(options?: SDKOptions);
    /**
     * Get one Pokémon.
     *
     * @remarks
     * Retrieves a single Pokémon by ID or name.
     */
    findOne(idOrName: string | number, options?: RequestOptions): Promise<models.GetPokemonResponse>;
    /**
     * Get a list of Pokémon.
     *
     * @remarks
     * Returns a single page of Pokémon results. Use the `next()` method on the result to fetch the next page.
     */
    findAll(params: {
        limit: number;
        offset?: number;
    }, options?: RequestOptions): Promise<Paginated<models.ListPokemonResponse>>;
}
//# sourceMappingURL=pokemons.d.ts.map