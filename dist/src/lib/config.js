"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK_METADATA = exports.serverURLFromOptions = exports.ServerEnvironment = exports.ServerList = exports.ServerProd = void 0;
const url_1 = require("./url");
/**
 * The production server.
 */
exports.ServerProd = "prod";
/**
 * Contains the list of servers available to the SDK
 */
exports.ServerList = {
    [exports.ServerProd]: "https://pokeapi.co/api/v2",
};
/**
 * The environment name. Defaults to the production environment.
 */
var ServerEnvironment;
(function (ServerEnvironment) {
    ServerEnvironment["Prod"] = "prod";
})(ServerEnvironment || (exports.ServerEnvironment = ServerEnvironment = {}));
function serverURLFromOptions(options) {
    var _a, _b, _c, _d, _e;
    let serverURL = options.serverURL;
    const serverParams = {
        prod: {},
        staging: {},
        customer: {
            environment: (_b = (_a = options.environment) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : "prod",
            organization: (_d = (_c = options.organization) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : "api",
        },
    };
    let params = {};
    const server = (_e = options.server) !== null && _e !== void 0 ? _e : exports.ServerProd;
    if (!serverURL) {
        serverURL = exports.ServerList[server] || "";
        params = serverParams[server] || {};
    }
    const u = (0, url_1.pathToFunc)(serverURL)(params);
    return new URL(u);
}
exports.serverURLFromOptions = serverURLFromOptions;
exports.SDK_METADATA = Object.freeze({
    language: "typescript",
    openapiDocVersion: "1.0.0",
    sdkVersion: "0.0.1",
    genVersion: "2.210.3",
    userAgent: "pokeai-sdk/typescript 0.0.1 2.210.3 1.0.0 openapi",
});
//# sourceMappingURL=config.js.map