import { Map, View } from 'ol';
import { defaults } from 'ol/control';
import { fromLonLat } from 'ol/proj';

import TileSource from './controls/TileSource';

class MapControl {
    map: Map;

    tile: TileSource;

    constructor(target: string) {
        this.tile = new TileSource();
        this.map = new Map({
            target: target,
            controls: defaults({
                attribution: false,
                rotate: false,
                zoom: false
            }),
            view: new View({
                zoom: 10,
                center: fromLonLat([113, 28])
            }),
            layers: [
                this.tile.gd
            ]
        });
    }
}

export default MapControl;
