<template>
    <div class="home">
        <div id="map_container"></div>
        <div class="footer">
            <span id="map_zoom_level"></span>
            <span id="footer_sep">,</span>
            <span id="mouse_position"></span>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import MapView from '@/map_control/MapView';

export default {
    name: 'home',
    components: {},
    mounted() {
        this.map = new MapView('map_container', 'mouse_position', 'map_zoom_level');
    },
};
</script>
<style scoped>
.home {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
#map_container {
    width: 100%;
    height: 100%;
}
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 25px;
    background-color: cadetblue;
}
#map_zoom_level{
    float: right;
    width: 40px;
}
#mouse_position{
    float: right;
}
#footer_sep{
    float: right;
}
</style>
