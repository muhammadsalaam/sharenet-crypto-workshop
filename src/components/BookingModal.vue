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
            <span class="status ms-4 pt-3"
              ><strong>{{ cape.remaining + " seats left" }}</strong></span
            >
            <Button
              @click="toggleDate(cape.date)"
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
    <!-- Johannesburg -->

    <div v-if="city === 'Johannesburg'">
      <h1>Availability for {{ " " + city }}</h1>
      <div class="row">
        <div class="col-4" v-for="joburg in jhbAvail" :key="joburg">
          <div class="date-card">
            <span class="dates ms-4 pt-3"
              ><strong>{{ joburg.date }}</strong></span
            ><br />
            <span class="status ms-4 pt-3"
              ><strong>{{ joburg.remaining + " seats left" }}</strong></span
            >
            <Button
              @click="toggleDate(joburg.date)"
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
    <!-- Durban  -->

    <div v-if="city === 'Durban'">
      <h1>Availability for {{ " " + city }}</h1>
      <div class="row">
        <div class="col-4" v-for="durbs in dbnAvail" :key="durbs">
          <div class="date-card">
            <span class="dates ms-4 pt-3"
              ><strong>{{ durbs.date }}</strong></span
            ><br />
            <span class="status ms-4 pt-3"
              ><strong>{{ durbs.remaining + " seats left" }}</strong></span
            >
            <Button
              @click="toggleDate(durbs.date)"
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
    setRemainder() {
      this.remainCPT[0] = this.cptAvail[0].remaining;
      this.remainCPT[1] = this.cptAvail[1].remaining;
      this.remainCPT[2] = this.cptAvail[2].remaining;

      this.remainJHB[0] = this.jhbAvail[0].remaining;
      this.remainJHB[1] = this.jhbAvail[1].remaining;
      this.remainJHB[2] = this.jhbAvail[2].remaining;

      this.remainDBN[0] = this.dbnAvail[0].remaining;
      this.remainDBN[1] = this.dbnAvail[1].remaining;
      this.remainDBN[2] = this.dbnAvail[2].remaining;
    },
  },
  beforeMount() {
    this.setRemainder();
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
