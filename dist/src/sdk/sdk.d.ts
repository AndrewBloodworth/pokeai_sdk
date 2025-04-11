import { SDKOptions } from "../lib/config";
import { ClientSDK } from "../lib/sdks";
import { Pokemons } from "./pokemons";
import { Generations } from "./generations";
export declare class PokeAPI extends ClientSDK {
    private readonly options$;
    constructor(options?: SDKOptions);
    private _pokemon?;
    get pokemon(): Pokemons;
    private _generation?;
    get generation(): Generations;
}
//# sourceMappingURL=sdk.d.ts.map