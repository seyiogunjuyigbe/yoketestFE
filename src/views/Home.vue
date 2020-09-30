<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-6">
        <Sidebar></Sidebar>
      </div>
      <div class="col-lg-8 col-md-6 col-sm-6">
        <BaseMap></BaseMap>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";
import BaseMap from "@/components/BaseMap.vue";
export default {
  name: "Home",
  components: {
    Sidebar,
    BaseMap,
  },
};
</script>
<style>
#nav {
  padding: 0;
}
body {
  max-height: 100vh;
  max-width: 100%;
}
</style>