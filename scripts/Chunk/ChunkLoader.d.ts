/**
 * ChunkLoader 
 * 
 * A Script for Minecraft Bedrock Edition that manages chunk loading and unloading.
 * @author grimza_src
 * @version 1.0.0
 * @license MIT
 * 
 * Discord: grimza_src
 * GitHub: https://github.com/grimzaSRC
 */
import {
    Dimension,
    TickingArea
} from "@minecraft/server";
import { IChunkManager } from "./Interfaces/IChunkManager";
import { Chunk } from "./Chunk";

interface ChunkCoordinates {
    x: number;
    z: number;
}

interface ChunkLoaderOptions {
    /**
     * Whether loaded chunks should persist across server restarts
     * @default false
     */
    persistent?: boolean;
    /**
     * Whether to enable logging output
     * @default false
     */
    logs?: boolean;
}

/**
 * @class ChunkLoader
 * @extends IChunkManager
 * @description Manages chunk loading and unloading in the world using TickingAreaManager.
 * @remarks This class uses the TickingAreaManager API.
 */
declare class ChunkLoader extends IChunkManager {
    /**
     * @param dimension - The dimension where chunks will be loaded.
     * @param options - Configuration options for the ChunkLoader.
     * @constructor for ChunkLoader
     */
    constructor(dimension: Dimension, options?: ChunkLoaderOptions);

    /**
     * Loads a chunk at the specified location using TickingAreaManager.
     * @param location - The location of the chunk to load {x, z}.
     * @returns Promise that resolves with the loaded Chunk.
     * @throws Error if the chunk limit is reached or chunk is already loaded.
     */
    load(location: ChunkCoordinates): Promise<Chunk>;

    /**
     * Unloads a chunk at the specified location by removing its ticking area.
     * @param location - The location of the chunk to unload {x, z}.
     * @returns void
     * @throws Error if the chunk is not loaded.
     */
    unload(location: ChunkCoordinates): void;

    /**
     * Unloads all loaded chunks by removing all ticking areas.
     * @returns void
     */
    unloadAll(): void;

    /**
     * Checks if a chunk at the specified location is loaded.
     * @param location - The location of the chunk to check {x, z}.
     * @returns boolean - Returns true if the chunk is loaded, false otherwise.
     */
    isLoaded(location: ChunkCoordinates): boolean;

    /**
     * Lists all loaded chunks in this dimension.
     * @returns An array of objects representing the coordinates of all loaded chunks.
     */
    list(): ChunkCoordinates[];

    /**
     * Gets a list of all loaded chunk keys in this dimension.
     * @returns Array of chunk key identifiers.
     */
    keyList(): string[];

    /**
     * Gets the center location of a chunk.
     * @param location - The location of the chunk {x, z}.
     * @returns The central coordinates of the chunk.
     */
    getCenter(location: ChunkCoordinates): ChunkCoordinates;

    /**
     * Gets the ticking area for a chunk at the specified location.
     * @param location - The location of the chunk {x, z}.
     * @returns The TickingArea for the chunk, or undefined if no ticking area exists.
     */
    getTickingArea(location: ChunkCoordinates): TickingArea | undefined;

    /**
     * Gets the dimension ID for internal mapping.
     * @returns The numeric dimension ID (0: overworld, 1: nether, 2: the_end).
     */
    getDimensionId(): number;

    /**
     * Checks if the ChunkLoader is set to persistent mode.
     * @returns True if persistent, false otherwise.
     */
    isPersistent(): boolean;

    /**
     * Gets the maximum chunk loading limit.
     * @returns The chunk loading limit as a number.
     */
    getLimit(): number;

    /**
     * Gets the current count of loaded chunks.
     * @returns The number of currently loaded chunks.
     */
    getCount(): number;
}

export { ChunkLoader };
