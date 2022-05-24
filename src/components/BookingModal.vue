<template>
  <div class="container">
    <h1>Availability for {{ " " + city }}</h1>
    <div class="row">
      <div class="col-4" v-for="(dates, index) in dates" :key="index">
        <div class="date-card">
          <span class="dates ms-4 pt-3"
            ><strong>{{ dates }}</strong></span
          >
          <Button
            @click="toggleDate(dates)"
            icon="pi pi-calendar-plus"
            label="Book Now"
            class="p-button-rounded ms-4 mt-2"
            style="width: 12rem"
          />
        </div>
      </div>
    </div>
    <Button
      @click="toggleCardsActive"
      label="Go Back"
      class="p-button-rounded ms-4 mt-2"
      style="width: 12rem"
    />
  </div>

  <SeatsModal v-if="isModalOpen" />
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Button from "primevue/button";
import SeatsModal from "./SeatsModal.vue";

export default {
  name: "BookingModal",
  data() {
    return {};
  },
  components: {
    Button,
    SeatsModal,
  },
  computed: {
    ...mapState({
      dates: (state) => state.booking.dates,
      city: (state) => state.booking.city,
      venue: (state) => state.booking.venue,
      isModalOpen: (state) => state.booking.isModalOpen,
    }),
  },
  methods: {
    ...mapMutations(["toggleModal", "toggleCardsActive", "toggleDate"]),
  },
};
</script>

<style scoped>
.date-card {
  padding: 10px;
  height: 100px;
  width: 300px;
  background-color: aliceblue;
  margin-bottom: 10%;
  border-radius: 5%;
}
</style>
