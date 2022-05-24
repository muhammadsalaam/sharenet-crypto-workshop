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
      <input
        id="seat-1"
        class="seat-select"
        type="checkbox"
        value="1"
        name="seat[]"
      />
      <label for="seat-1" class="seat"></label>
      <input
        id="seat-2"
        class="seat-select"
        type="checkbox"
        value="2"
        name="seat[]"
      />
      <label for="seat-2" class="seat"></label>
      <input
        id="seat-3"
        class="seat-select"
        type="checkbox"
        value="3"
        name="seat[]"
      />
      <label for="seat-3" class="seat"></label>
      <input
        id="seat-4"
        class="seat-select"
        type="checkbox"
        value="4"
        name="seat[]"
      />
      <label for="seat-4" class="seat"></label>
    </section>
    <template #footer>
      <div class="flex justify-content-end">
        <Button label="Confirm" @click="confirmCart" class="p-button-primary" />
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
    };
  },
  computed: {
    ...mapState({
      date: (state) => state.booking.date,
      venue: (state) => state.booking.venue,
      city: (state) => state.booking.city,
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
  },
};
</script>

<style scoped>
.seat {
  float: left;
  display: block;
  margin: 5px;
  background: #4caf50;
  width: 100px;
  height: 140px;
}

.seat-select {
  display: none;
}

.seat-select:checked + .seat {
  background: #f44336;
}
</style>
