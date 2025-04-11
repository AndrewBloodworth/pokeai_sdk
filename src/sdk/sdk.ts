import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
import { Pokemons } from "./pokemons";
import { Generations } from "./generations";

export class PokeAPI extends ClientSDK {
  private readonly options$: SDKOptions;
  constructor(options: SDKOptions = {}) {
    super({
      client: options.httpClient || new HTTPClient(),
      baseURL: serverURLFromOptions(options),
    });

    this.options$ = options;
    void this.options$;
  }

  private _pokemon?: Pokemons;
  get pokemon() {
    return (this._pokemon ??= new Pokemons(this.options$));
  }

  private _generation?: Generations;
  get generation() {
    return (this._generation ??= new Generations(this.options$));
  }
}
