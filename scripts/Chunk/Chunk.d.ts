import { 
    Dimension,
    Entity,
    Vector3 
} from "@minecraft/server";

/**
 * @class Chunk
 * @description Represents a chunk in the world.
 */
declare class Chunk {
    /**
     * The x-coordinate of the chunk.
     */
    x: number;

    /**
     * The z-coordinate of the chunk.
     */
    z: number;

    /**
     * The central location of the chunk.
     * Represented as an object containing x, y, and z coordinates.
     */
    location: Vector3;

    /**
     * The dimension where the chunk is located.
     */
    dimension: Dimension;

    /**
     * Constructor to initialize a chunk with location and dimension.
     * @param location - An object containing the x and z coordinates.
     * @param dimension - The dimension where the chunk is located.
     * @constructor for Chunk
     */
    constructor(location: { x: number; z: number }, dimension: Dimension);

    /**
     * Compares if another chunk has the same x and z coordinates.
     * @param other - Another chunk to compare.
     * @returns boolean - Returns true if they are equal.
     */
    equals(other: Chunk): boolean;

    /**
     * Gets the entities inside the boundaries of the chunk.
     * @returns An array of entities inside the chunk.
     */
    getEntitiesInside(): Entity[];

    /**
     * Checks if the chunk is loaded by checking if a block can be retrieved.
     * @returns boolean - Returns true if the chunk is loaded.
     */
    isLoaded(): boolean;
}

export { Chunk };