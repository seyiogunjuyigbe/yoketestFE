<template>
  <div class="sidebar">
    <div class="container text-left">
      <h3>COVID-19 Online Assessment Tracker</h3>
      <p class="">Reported:</p>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a
            class="nav-link"
            :class="[clickedRange === 'today' ? 'active' : '']"
            role="button"
            @click="selectRange('today')"
            >Today</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="[clickedRange === '2weeks' ? 'active' : '']"
            role="button"
            @click="selectRange('2weeks')"
            >Last 2 Weeks</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="[clickedRange === '30days' ? 'active' : '']"
            role="button"
            @click="selectRange('30days')"
            >Last 30 days</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="[clickedRange === 'custom' ? 'active' : '']"
            role="button"
            @click="toggleCalendar"
            >Custom Range</a
          >
        </li>
      </ul>
      <div v-if="calendars" class="calendars">
        <div class="calendar mb-2">
          <p>Start Date</p>
          <input
            class="form-control"
            type="date"
            name=""
            id=""
            v-model="queryObject.start"
            min="2020-03-01"
            max="2020-05-31"
          />
        </div>
        <div class="calendar mb-2">
          <p>End Date</p>
          <input
            class="form-control"
            type="date"
            name=""
            id=""
            v-model="queryObject.end"
            min="2020-03-01"
            max="2020-05-31"
          />
        </div>
      </div>
      <div
        v-if="loadingSymptoms"
        class="spinner-border text-secondary"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
      <div v-else>
        <p>Symptom(s)</p>
        <form @submit.prevent="fetchResult">
          <div v-for="(symptom, i) in symptoms" :key="i">
            <input
              type="checkbox"
              name=""
              class="symptoms"
              :id="symptom._id"
              v-model="queryObject.symptoms"
              :value="symptom._id"
              @change="changeStatus"
            />
            <label :for="symptom._id" class="ml-2">{{ symptom.name }}</label>
          </div>
          <button
            type="submit"
            :disabled="searchBtn"
            class="btn btn-sm btn-danger"
          >
            Search >>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import * as moment from "moment/moment";
export default {
  name: "Sidebar",
  data() {
    return {
      queryObject: {
        start: moment.utc().format("YYYY-MM-DD"),
        end: moment.utc().add(1, "days").format("YYYY-MM-DD"),
        symptoms: [],
      },
      calendars: false,
      searchBtn: true,
      clickedRange: "today",
    };
  },
  mounted() {
    this.$store.dispatch("getSymptoms");
  },
  //   watch: {
  //     searchBtn(old, newV) {
  //       console.log(old, newV);
  //     },
  //   },
  computed: {
    ...mapGetters({
      symptoms: "getSymptoms",
      loadingSymptoms: "getLoadingSymptoms",
    }),
  },
  methods: {
    fetchResult() {
      this.$store.dispatch("fetchSearchResults", this.queryObject);
    },
    changeStatus(e) {
      let symptoms = document.querySelectorAll(".symptoms");
      symptoms = Array.from(symptoms);
      let checkedValue = symptoms.find((el) => el.checked);
      checkedValue ? (this.searchBtn = false) : (this.searchBtn = true);
    },
    selectRange(value) {
      this.calendars = false;
      switch (value) {
        case "today":
          this.queryObject.start = moment.utc().format("YYYY-MM-DD");
          this.queryObject.end = moment
            .utc()
            .add(1, "days")
            .format("YYYY-MM-DD");
          this.clickedRange = "today";
          break;

        case "2weeks":
          this.queryObject.start = moment
            .utc()
            .subtract(14, "days")
            .format("YYYY-MM-DD");
          this.queryObject.end = moment.utc();
          this.clickedRange = "2weeks";
          break;

        case "30days":
          this.queryObject.start = moment
            .utc()
            .subtract(30, "days")
            .format("YYYY-MM-DD");
          this.queryObject.end = moment.utc();
          this.clickedRange = "30days";
          break;
        default:
          this.clickedRange = "today";
          break;
      }
    },
    toggleCalendar() {
      this.calendars = !this.calendars;
      this.clickedRange = "custom";
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.sidebar {
  font-family: "Montserrat", sans-serif;
  font-size: 0.8em;
  border-right: 1px solid #f3f3f3;
}
form {
  width: 90%;
  margin-right: 0;
}
label {
  text-overflow: clip;
}
.btn-danger {
  padding: 1em 4em;
  background-color: red !important;
}
</style>