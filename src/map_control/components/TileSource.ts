import { XYZ } from 'ol/source';
import { Tile } from 'ol/layer';

class TileSource {
    gg: Tile;

    gd: Tile;

    constructor() {
        this.gg = new Tile({
            source: new XYZ({
                url: 'http://mt2.google.cn/vt/lyrs=s@167000000&hl=zh-CN&gl=cn&x=420&y=193&z=9&s=Galil',
                minZoom: 2,
                maxZoom: 18,
            }),
        });

        this.gd = new Tile({
            source: new XYZ({
                url: 'http://wprd04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=8 ',
                minZoom: 2,
                maxZoom: 18,
            }),
        });
    }
}


export default TileSource;
