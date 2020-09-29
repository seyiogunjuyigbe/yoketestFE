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
      map: null,
    };
  },
  computed: {
    ...mapGetters({
      results: "getSearchResults",
    }),
  },
  watch: {
    results(oldvalue, newValue) {
      if (oldvalue !== newValue) {
        this.setMarkers();
      }
    },
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    this.map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [9.082, 8.6753],
      zoom: 4,
      // maxBounds: [
      //   [103.6, 1.1704753],
      //   [104.1, 1.4754753],
      // ],
    });
    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, "top-right");
    const marker = new mapboxgl.Marker()
      .setLngLat([9.082, 8.6753])
      .addTo(this.map);

    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    // map.addControl(geolocate, "top-right");
  },
  methods: {
    setMarkers() {
      this.results.forEach((r) => {
        let m = new mapboxgl.Marker()
          .setLngLat(r.location.coordinates)
          .addTo(this.map);
      });
    },
  },
};
</script>
<style scoped>
.basemap {
  width: 100%;
  height: 100%;
}
</style>