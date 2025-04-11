"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDKError = void 0;
class SDKError extends Error {
    constructor(message, response, body = "") {
        const statusCode = response.status;
        let bodyString = "";
        if (body.length > 0) {
            bodyString = `\n${body}`;
        }
        super(`${message}: Status ${statusCode}${bodyString}`);
        this.statusCode = statusCode;
        this.body = body;
        this.rawResponse = response;
        this.name = "SDKError";
    }
}
exports.SDKError = SDKError;
//# sourceMappingURL=sdkerror.js.map