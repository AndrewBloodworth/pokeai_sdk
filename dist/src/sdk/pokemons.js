"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemons = void 0;
const config_1 = require("../lib/config");
const enc$ = __importStar(require("../lib/encodings"));
const http_1 = require("../lib/http");
const sdks_1 = require("../lib/sdks");
const url_1 = require("../lib/url");
const models = __importStar(require("../models"));
class Pokemons extends sdks_1.ClientSDK {
    constructor(options = {}) {
        super({
            client: options.httpClient || new http_1.HTTPClient(),
            baseURL: (0, config_1.serverURLFromOptions)(options),
        });
        this.options$ = options;
        void this.options$;
    }
    /**
     * Get one Pokémon.
     *
     * @remarks
     * Retrieves a single Pokémon by ID or name.
     */
    async findOne(idOrName, options) {
        var _a;
        const input = {
            idOrName: idOrName,
        };
        const headers = new Headers();
        headers.set("user-agent", config_1.SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");
        const payload = models.GetPokemonRequest$.outboundSchema.parse(input);
        const body = null;
        const path = this.templateURLComponent(`/pokemon/${payload.idOrName}`)();
        const security = typeof this.options$.security === "function"
            ? await this.options$.security()
            : this.options$.security;
        const securitySettings = this.resolveGlobalSecurity(security);
        const response = await this.fetch$({
            security: securitySettings,
            method: "get",
            path,
            headers,
            query: "",
            body,
        }, options);
        const responseFields = {
            ContentType: (_a = response.headers.get("content-type")) !== null && _a !== void 0 ? _a : "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };
        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = models.GetPokemonsResponse$.inboundSchema.parse({
                ...responseFields,
                classes: responseBody,
            });
            return result;
        }
        else if (this.matchResponse(response, "5XX", "application/json")) {
            const responseBody = await response.json();
            const result = models.APIError$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new models.APIError(result);
        }
        else if (this.matchResponse(response, "4XX", "*")) {
            const responseBody = await response.text();
            const result = models.APIError$.inboundSchema.parse({
                code: `${response.status}`,
                message: responseBody,
            });
            throw new models.APIError(result);
        }
        else if (this.matchResponse(response, "default", "application/json")) {
            const responseBody = await response.json();
            const result = models.GetPokemonsResponse$.inboundSchema.parse({
                ...responseFields,
                Error: responseBody,
            });
            return result;
        }
        else {
            const responseBody = await response.text();
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }
    /**
     * Get a list of Pokémon.
     *
     * @remarks
     * Returns a single page of Pokémon results. Use the `next()` method on the result to fetch the next page.
     */
    async findAll(params, options) {
        var _a, _b;
        const input = {
            limit: params.limit,
            offset: params.offset,
        };
        const headers = new Headers();
        headers.set("user-agent", config_1.SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");
        const payload = models.ListPokemonRequest$.outboundSchema.parse(input);
        const body = null;
        const path = this.templateURLComponent("/pokemon")();
        const query = [
            enc$.encodeForm("limit", payload.limit, {
                explode: false,
                charEncoding: "percent",
            }),
            enc$.encodeForm("offset", payload.offset, {
                explode: false,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");
        const security = typeof this.options$.security === "function"
            ? await this.options$.security()
            : this.options$.security;
        const securitySettings = this.resolveGlobalSecurity(security);
        const response = await this.fetch$({
            security: securitySettings,
            method: "get",
            path,
            headers,
            query,
            body,
        }, options);
        const responseFields = {
            ContentType: (_a = response.headers.get("content-type")) !== null && _a !== void 0 ? _a : "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };
        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = models.ListPokemonsResponse$.inboundSchema.parse({
                ...responseFields,
                classes: responseBody,
            });
            const rawOffset = (0, url_1.parseUrlParam)((_b = result.classes) === null || _b === void 0 ? void 0 : _b.next, "offset");
            const offset = rawOffset ? parseInt(rawOffset, 10) : NaN;
            if (!isNaN(offset)) {
                return {
                    ...result,
                    next: () => this.findAll({
                        limit: params.limit,
                        offset,
                    }),
                };
            }
            // Fallback: no next page
            return {
                ...result,
                next: null,
            };
        }
        else if (this.matchResponse(response, "5XX", "application/json")) {
            const responseBody = await response.json();
            const result = models.APIError$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new models.APIError(result);
        }
        else if (this.matchResponse(response, "4XX", "*")) {
            console.log("hello");
            const responseBody = await response.text();
            const result = models.APIError$.inboundSchema.parse({
                code: `${response.status}`,
                message: responseBody,
            });
            throw new models.APIError(result);
        }
        else if (this.matchResponse(response, "default", "*")) {
            const responseBody = await response.json();
            const result = models.ListPokemonsResponse$.inboundSchema.parse({
                ...responseFields,
                Error: responseBody,
            });
            return { ...result, next: null };
        }
        else {
            // console.log(response);
            const responseBody = await response.text();
            this.matchResponse(response, "default", "application/json");
            throw new models.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
exports.Pokemons = Pokemons;
//# sourceMappingURL=pokemons.js.map