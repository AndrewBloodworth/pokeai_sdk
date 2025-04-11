export function bytesToBase64(u8arr: Uint8Array): string {
  return btoa(String.fromCodePoint(...u8arr));
}

export function stringToBytes(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}
export function stringToBase64(str: string): string {
  return bytesToBase64(stringToBytes(str));
}
