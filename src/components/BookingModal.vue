<template>
  <div class="container">
    <div v-if="city === 'Cape Town'">
      <h1>Availability for {{ " " + city }}</h1>
      <div class="row">
        <div class="col-4" v-for="cape in cptAvail" :key="cape">
          <div class="date-card">
            <span class="dates ms-4 pt-3"
              ><strong>{{ cape.date }}</strong></span
            ><br />
            <span v-if="cape.remaining > 0" class="status ms-4 pt-3"
              ><strong>{{ cape.remaining + " seats left" }}</strong></span
            >
            <span v-else class="status ms-4 pt-3"
              ><strong>Sold Out</strong></span
            >
            <Button
              @click="toggleDate(cape.date)"
              icon="pi pi-calendar-plus"
              label="Book Now"
              class="p-button-rounded ms-4 mt-2"
              style="width: 12rem"
              :disabled="cape.remaining === 0"
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
    <!-- Johannesburg -->

    <div v-if="city === 'Johannesburg'">
      <h1>Availability for {{ " " + city }}</h1>
      <div class="row">
        <div class="col-4" v-for="joburg in jhbAvail" :key="joburg">
          <div class="date-card">
            <span class="dates ms-4 pt-3"
              ><strong>{{ joburg.date }}</strong></span
            ><br />
            <span v-if="joburg.remaining > 0" class="status ms-4 pt-3"
              ><strong>{{ joburg.remaining + " seats left" }}</strong></span
            >
            <span v-else class="status ms-4 pt-3"
              ><strong>Sold Out</strong></span
            >
            <Button
              @click="toggleDate(joburg.date)"
              icon="pi pi-calendar-plus"
              label="Book Now"
              class="p-button-rounded ms-4 mt-2"
              style="width: 12rem"
              :disabled="joburg.remaining === 0"
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
    <!-- Durban  -->

    <div v-if="city === 'Durban'">
      <h1>Availability for {{ " " + city }}</h1>
      <div class="row">
        <div class="col-4" v-for="durbs in dbnAvail" :key="durbs">
          <div class="date-card">
            <span class="dates ms-4 pt-3"
              ><strong>{{ durbs.date }}</strong></span
            ><br />
            <span v-if="durbs.remaining > 0" class="status ms-4 pt-3"
              ><strong>{{ durbs.remaining + " seats left" }}</strong></span
            >
            <span v-else class="status ms-4 pt-3"
              ><strong>Sold Out</strong></span
            >
            <Button
              @click="toggleDate(durbs.date)"
              icon="pi pi-calendar-plus"
              label="Book Now"
              class="p-button-rounded ms-4 mt-2"
              style="width: 12rem"
              :disabled="durbs.remaining === 0"
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
    return {
      remainCPT: [],
      remainJHB: [],
      remainDBN: [],
    };
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
      cptAvail: (state) => state.booking.cptAvail,
      jhbAvail: (state) => state.booking.jhbAvail,
      dbnAvail: (state) => state.booking.dbnAvail,
    }),
  },
  methods: {
    ...mapMutations(["toggleModal", "toggleCardsActive", "toggleDate"]),
  },
  beforeMount() {},
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

@media screen and (max-width: 430px) {
}
</style>
