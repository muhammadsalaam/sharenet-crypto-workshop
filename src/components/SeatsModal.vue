<template>
  <Dialog
    v-model:visible="display"
    @hide="toggleModal"
    :modal="true"
    :closeOnEscape="false"
  >
    <template #header>
      <h2 class="heading">{{ "Booking Seats for " + city + " Workshop" }}</h2>
    </template>
    <h3 class="subheading">Date: {{ date }}</h3>
    <h4 class="venue">Venue: {{ venue }}</h4>
    <section id="seats">
      <div class="container">
        <div class="row">
          <div
            class="form-check col-4"
            v-for="(seat, index) in seatArr"
            :key="index"
          >
            <input
              type="checkbox"
              class="form-check-input"
              :checked="checkboxCheck(seat)"
              v-model="seatArr[index]"
              :name="index"
              true-value="1"
              false-value="0"
            />
            <label class="form-check-label" :for="index">{{
              "Seat " + (index + 1)
            }}</label>
            <hr />
          </div>
        </div>
      </div>
    </section>
    <section class="booked">
      <p class="booked-seat"></p>
    </section>
    <template #footer>
      <div class="flex justify-content-end">
        <Button
          label="Confirm"
          @click="confirmSeats"
          class="p-button-primary"
        />
      </div>
    </template>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import { mapState, mapMutations } from "vuex";
export default {
  name: "SeatsModal",
  data() {
    return {
      display: true,
      seatArr: [],
    };
  },
  computed: {
    ...mapState({
      date: (state) => state.booking.date,
      venue: (state) => state.booking.venue,
      city: (state) => state.booking.city,
      cptAvail: (state) => state.booking.cptAvail,
      jhbAvail: (state) => state.booking.jhbAvail,
      dbnAvail: (state) => state.booking.dbnAvail,
      remainder: (state) => state.booking.remainder,
    }),
  },
  components: {
    Dialog,
    Button,
  },
  methods: {
    ...mapMutations(["toggleModal"]),
    confirmCart() {
      this.toggleModal();
    },
    splitSeats() {
      // run if city is Cape Town
      if (this.city === "Cape Town") {
        for (let i = 0; i < 3; i++) {
          if (this.cptAvail[i].date === this.date) {
            this.seatArr = this.cptAvail[i].seats;
            console.log(this.seatArr);
          }
        }
      }
      // run if city is Johannesburg
      if (this.city === "Johannesburg") {
        for (let i = 0; i < 3; i++) {
          if (this.jhbAvail[i].date === this.date) {
            this.seatArr = this.jhbAvail[i].seats;
            console.log(this.seatArr);
          }
        }
      }
      // run if city is Durban
      if (this.city === "Durban") {
        for (let i = 0; i < 3; i++) {
          if (this.dbnAvail[i].date === this.date) {
            this.seatArr = this.dbnAvail[i].seats;
            console.log(this.seatArr);
          }
        }
      }
    },
    checkboxCheck(seat) {
      if (seat === 1) {
        return true;
      } else {
        return false;
      }
    },
    confirmSeats() {
      // run if city is Cape Town
      if (this.city === "Cape Town") {
        for (let i = 0; i < 3; i++) {
          if (this.cptAvail[i].date === this.date) {
            this.cptAvail[i].seats = this.seatArr;
            this.cptAvail[i].remaining = 0;
            for (let j = 0; j < this.cptAvail[i].seats.length; j++) {
              if (this.cptAvail[i].seats[j] === 0) {
                this.cptAvail[i].remaining++;
              }
            }
          }
        }
      }
      // run if city is Johannesburg
      if (this.city === "Johannesburg") {
        for (let i = 0; i < 3; i++) {
          if (this.jhbAvail[i].date === this.date) {
            this.jhbAvail[i].seats = this.seatArr;
            this.jhbAvail[i].remaining = 0;
            for (let j = 0; j < this.jhbAvail[i].seats.length; j++) {
              if (this.jhbAvail[i].seats[j] === 0) {
                this.jhbAvail[i].remaining++;
              }
            }
          }
        }
      }
      // run if city is Durban
      if (this.city === "Durban") {
        for (let i = 0; i < 3; i++) {
          if (this.dbnAvail[i].date === this.date) {
            this.dbnAvail[i].seats = this.seatArr;
            this.dbnAvail[i].remaining = 0;
            for (let j = 0; j < this.dbnAvail[i].seats.length; j++) {
              if (this.dbnAvail[i].seats[j] === 0) {
                this.dbnAvail[i].remaining++;
              }
            }
          }
        }
      }
      this.toggleModal();
    },
  },
  beforeMount() {
    this.splitSeats();
  },
};
</script>

<style scoped></style>
