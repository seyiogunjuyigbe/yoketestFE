<template>
  <div id="mapDiv">
    <div id="mapContainer" class="basemap"></div>
    <div id="modal" class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="spinner-border text-secondary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import { mapGetters } from "vuex";
import jquery from "jquery";
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
      loadingMap: "getLoadingMap",
    }),
  },
  watch: {
    results(oldvalue, newValue) {
      if (oldvalue !== newValue) {
        this.setMarkers(this.removeModal);
      }
    },
    loadingMap(oldV, newV) {
      console.log(newV);
      if (newV === false) jquery("#modal").modal("show");
    },
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;

    this.map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [9.082, 8.6753],
      zoom: 10,
    });
    const nav = new mapboxgl.NavigationControl();
    this.map.addControl(nav, "top-right");
    console.log(this.map);
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
    });

    this.map.addControl(geolocate, "top-right");
    jquery("#modal").modal("hide");
  },
  methods: {
    setMarkers(cb) {
      this.results.forEach((r) => {
        let m = new mapboxgl.Marker()
          .setLngLat(r.location.coordinates)
          .addTo(this.map);
      });
      cb();
    },
    removeModal() {
      console.log("hiding");
      jquery("#modal").modal("hide");
    },
  },
};
</script>
<style scoped>
.basemap {
  width: 100%;
  height: 100%;
}
#mapDiv {
  height: 100%;
  width: 100%;
}
#modal {
  height: 80%;
  width: 80%;
}
</style>