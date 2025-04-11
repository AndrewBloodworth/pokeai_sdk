import { SDKOptions } from "../lib/config";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as models from "../models";
import { Paginated } from "../types/operations";
export declare class Generations extends ClientSDK {
    private readonly options$;
    constructor(options?: SDKOptions);
    /**
     * Get one generation.
     *
     * @remarks
     * Retrieves a single generation by ID or name.
     */
    findOne(idOrName: string | number, options?: RequestOptions): Promise<models.GetGenerationResponse>;
    /**
     * Get a list of generations.
     *
     * @remarks
     * Returns a single page of generation results. Use the `next()` method on the result to fetch the next page.
     */
    findAll(params: {
        limit: number;
        offset?: number;
    }, options?: RequestOptions): Promise<Paginated<models.ListGenerationResponse>>;
}
//# sourceMappingURL=generations.d.ts.map