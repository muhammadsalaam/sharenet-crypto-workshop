<template>
  <section class="section1">
    <img class="banner mt-2" src="../assets/sharenet-banner.png" alt="banner" />
  </section>
  <section class="section2">
    <div class="container">
      <div class="row">
        <div class="col-4 mt-4">
          <Card v-if="cardsActive" class="cape">
            <template #header>
              <img class="head-pic" alt="cpt header" src="../assets/cpt.jpg" />
            </template>
            <template #title> Cape Town </template>
            <template #footer>
              <Button
                @click="toggleCityCPT"
                class="mb-5"
                icon="pi pi-eye"
                label="View More"
              />
            </template>
          </Card>
        </div>
        <div class="col-4 mt-4">
          <Card v-if="cardsActive" class="cape">
            <template #header>
              <img class="head-pic" alt="cpt header" src="../assets/jhb.jpg" />
            </template>
            <template #title> Johannesburg </template>
            <template #footer>
              <Button
                @click="toggleCityJHB"
                class="mb-5"
                icon="pi pi-eye"
                label="View More"
              />
            </template>
          </Card>
        </div>
        <div class="col-4 mt-4">
          <Card v-if="cardsActive" class="cape">
            <template #header>
              <img class="head-pic" alt="cpt header" src="../assets/kzn.jpg" />
            </template>
            <template #title> Durban </template>
            <template #footer>
              <Button
                @click="toggleCityKZN"
                class="mb-5"
                icon="pi pi-eye"
                label="View More"
              />
            </template>
          </Card>
        </div>
      </div>
      <div class="row"></div>
    </div>
  </section>

  <BookingModal v-if="!cardsActive" />
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Card from "primevue/card";
import Button from "primevue/button";
import BookingModal from "./BookingModal.vue";
export default {
  name: "DisplayPage",
  components: {
    BookingModal,
    Card,
    Button,
  },
  computed: {
    ...mapState({
      cardsActive: (state) => state.booking.cardsActive,
    }),
  },
  methods: {
    ...mapMutations(["toggleCityCPT", "toggleCityKZN", "toggleCityJHB"]),
  },
};
</script>

<style scoped>
.banner {
  object-fit: cover;
  max-width: 80vw;
  border: 1px solid;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
}
.cape {
  height: 360px;
  width: 300px;
}
.head-pic {
  height: 170px;
  object-fit: cover;
}
</style>
