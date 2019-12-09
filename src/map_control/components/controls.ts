import { MousePosition, Control } from 'ol/control';
import { createStringXY } from 'ol/coordinate';
import { PluggableMap } from 'ol';
import { listen } from 'ol/events';

class MapZoomLevel extends Control {
    targetElement: Element | null;
    currentZoom: number;

    constructor(target: string) {
        super({});
        this.currentZoom = -1;
        this.targetElement = document.getElementById(target);
    }

    setZoomLevel(level:number | undefined) {
        if (level !== undefined && level !== this.currentZoom) {
            this.currentZoom = level;
            if (this.targetElement != null) {
                this.targetElement.innerHTML = this.currentZoom.toFixed(1);
            }
        }
    }

    setMap(map: PluggableMap): void {
        if (this.targetElement !== null) {
            const level = map.getView().getZoom();
            this.setZoomLevel(level);

            // const viewport = map.getViewport();
            this.listenerKeys.push(listen(map, 'moveend', ():boolean => {
                const level2 = map.getView().getZoom();
                this.setZoomLevel(level2);
                return true;
            }, this));
        }
    }
}

class MapControl {
    mousePos: MousePosition;
    zoomLevel: MapZoomLevel;
    constructor(posTarget: string, zoomTarget: string) {
        this.mousePos = new MousePosition({
            target: posTarget,
            projection: 'EPSG:4326',
            coordinateFormat: createStringXY(6),
            undefinedHTML: '&nbsp;'
        });

        this.zoomLevel = new MapZoomLevel(zoomTarget);
    }
}

export default MapControl;
