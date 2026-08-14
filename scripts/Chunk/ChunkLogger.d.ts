/**
 * ChunkLogger
 * 
 * A logger class for ChunkLoader that manages console output
 * @author gameza_src
 * @version 1.0.0
 */

export declare class ChunkLogger {
    /**
     * @param enabled - Whether logging is enabled by default (default: false)
     */
    constructor(enabled?: boolean);

    /**
     * Enable logging output
     */
    enable(): void;

    /**
     * Disable logging output
     */
    disable(): void;

    /**
     * Check if logging is currently enabled
     * @returns True if logging is enabled
     */
    isEnabled(): boolean;

    /**
     * Log a synchronized chunk message
     * @param key - The chunk key identifier
     */
    synchronized(key: string): void;

    /**
     * Log a loaded chunk message
     * @param key - The chunk key identifier
     */
    loaded(key: string): void;

    /**
     * Log an unloaded chunk message
     * @param key - The chunk key identifier
     */
    unloaded(key: string): void;

    /**
     * Log all unloaded chunks message
     * @param count - The number of chunks unloaded
     */
    unloadedAll(count: number): void;

    /**
     * Log an error message
     * @param message - The error message to log
     */
    error(message: string): void;

    /**
     * Log an info message
     * @param message - The info message to log
     */
    info(message: string): void;
}
