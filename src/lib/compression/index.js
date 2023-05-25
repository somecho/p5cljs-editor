import { strToU8, strFromU8, decompressSync, deflateSync } from 'fflate'

/**
 * Encodes a string to base64 using deflate provided by fflate
 * @param {string} s - string to be compressed
 * @returns {string} base64 string
 */
export function encode(s) {
	const u8 = deflateSync(strToU8(s))
	return btoa(String.fromCharCode.apply(null, u8));
}

/**
 * Decodes a base64 string using fflate's decompress method,
 * which automatically detects what format the compression is.
 * @param {string} s - base64 string to be decompressed
 * @returns {string} original string
 */
export function decode(s) {
	const binaryString = atob(s)
	let bytes = new Uint8Array(binaryString.length);
	for (let i = 0; i < binaryString.length; i++) {
		bytes[i] = binaryString.charCodeAt(i)
	}
	return strFromU8(decompressSync(bytes))
}


