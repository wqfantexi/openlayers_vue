<template>
    <div class="home">
        <div id="map_container"></div>
    </div>
</template>

<script>
// @ is an alias to /src
import MapControl from '@/map_control/MapControl';

export default {
    name: 'home',
    components: {},
    mounted() {
        this.map = new MapControl('map_container');
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
</style>
