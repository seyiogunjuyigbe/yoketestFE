<template>
  <div class="home">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-6">
        <Sidebar></Sidebar>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
  },
};
</script>
