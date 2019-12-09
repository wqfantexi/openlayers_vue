import { Map, View } from 'ol';
import { defaults } from 'ol/control';
import { fromLonLat } from 'ol/proj';
import MapControl from './components/controls';
import TileSource from './components/TileSource';

class MapView {
    map: Map;
    controls: MapControl;
    tile: TileSource;

    constructor(target: string, posTarget: string, zoomTarget: string) {
        this.tile = new TileSource();
        this.controls = new MapControl(posTarget, zoomTarget);
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
        this.map.addControl(this.controls.mousePos);
        this.map.addControl(this.controls.zoomLevel);
    }
}

export default MapView;
