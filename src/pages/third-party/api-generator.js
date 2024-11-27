// apiKeyGenerator.js
import crypto from 'crypto';

/**
 * Generates a random API key.
 * @param {number} size - The size of the key in bytes.
 * @param {string} format - The encoding format (default is 'base64').
 * @returns {string} - The generated API key.
 */
function generateApiKey(size = 32, format = 'base64') {
    const buffer = crypto.randomBytes(size);
    return buffer.toString(format);
}

export default generateApiKey;