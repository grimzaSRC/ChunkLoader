// Just an example of how to use it
import { Player, world } from '@minecraft/server';
import { ChunkLoader } from './Chunk/ChunkLoader';

world.afterEvents.itemUse.subscribe(({
    source: player
}) => {
    if (!(player instanceof Player)) return;
    const dimension = player.dimension; // or just world.getDimension('overworld')
    const destination = { x: 2300, y: 70, z: 4000 }

    // persistent will keep created chunks loaded across server restarts, until unloaded manually
    const chunk = new ChunkLoader(dimension, { persistent: true, logs: true });

    chunk.load(destination).then(() => {
        dimension.setBlockType(destination, 'minecraft:stone')
        chunk.unload(destination)
    })
})