"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeAPI = void 0;
const config_1 = require("../lib/config");
const http_1 = require("../lib/http");
const sdks_1 = require("../lib/sdks");
const pokemons_1 = require("./pokemons");
const generations_1 = require("./generations");
class PokeAPI extends sdks_1.ClientSDK {
    constructor(options = {}) {
        super({
            client: options.httpClient || new http_1.HTTPClient(),
            baseURL: (0, config_1.serverURLFromOptions)(options),
        });
        this.options$ = options;
        void this.options$;
    }
    get pokemon() {
        var _a;
        return ((_a = this._pokemon) !== null && _a !== void 0 ? _a : (this._pokemon = new pokemons_1.Pokemons(this.options$)));
    }
    get generation() {
        var _a;
        return ((_a = this._generation) !== null && _a !== void 0 ? _a : (this._generation = new generations_1.Generations(this.options$)));
    }
}
exports.PokeAPI = PokeAPI;
//# sourceMappingURL=sdk.js.map