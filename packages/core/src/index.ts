/**
 * Minions Oss-quality SDK
 *
 * Linting rules, test coverage targets, usability checklists, and release gates
 *
 * @module @minions-oss-quality/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Oss-quality.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
