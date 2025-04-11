"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToBase64 = exports.stringToBytes = exports.bytesToBase64 = void 0;
function bytesToBase64(u8arr) {
    return btoa(String.fromCodePoint(...u8arr));
}
exports.bytesToBase64 = bytesToBase64;
function stringToBytes(str) {
    return new TextEncoder().encode(str);
}
exports.stringToBytes = stringToBytes;
function stringToBase64(str) {
    return bytesToBase64(stringToBytes(str));
}
exports.stringToBase64 = stringToBase64;
//# sourceMappingURL=base64.js.map