<template>
  <div id="mapContainer" class="basemap"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { mapGetters } from "vuex";

export default {
  name: "BaseMap",
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
      mapbox: {
        lat: "",
        long: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      results: "getSearchResults",
    }),
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    const map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: this.results[0].location.coordinates,
      zoom: 8,
      maxBounds: [
        [103.6, 1.1704753],
        [104.1, 1.4754753],
      ],
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, "top-right");
    // const marker = new mapboxgl.Marker()
    //   .setLngLat([103.811279, 1.345399], [103.811229, 1.345399])
    //   .addTo(map);

    this.results.forEach((r) => {
      new mapboxgl.Marker().setLngLat(r.location.coordinates).addTo(map);
    });

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    // map.addControl(geolocate, "top-right");
  },
};
</script>
<style lang="scss" scoped>
.basemap {
  width: 100%;
  height: 100%;
}
</style>