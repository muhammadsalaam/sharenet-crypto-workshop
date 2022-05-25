<template>
  <section class="section1">
    <p class="main-heading pt-2">
      WELCOME TO<br />SHARENET'S <span class="color-word">CRYPTO</span> WORKSHOP
    </p>
    <p class="text">
      At the end of this workshop you’ll know the rules of thumb to follow
      across all of the fundamental of Crypto and the tech behind it all. You’ll
      be less likely to be fooled because you understand the history, the theory
      and the best practices to apply and trade safely.
    </p>
  </section>
  <section class="section2">
    <div class="row">
      <h2 class="sub-heading mt-3" v-if="cardsActive">
        Select A <span class="color-word2">City</span>
      </h2>
      <div class="col-xs-12 col-md-6 col-lg-4 mt-4">
        <div v-if="cardsActive" class="cards">
          <img class="head-pic" alt="cpt header" src="../assets/cpt.jpg" />
          <h3 class="city mt-2">Cape Town</h3>
          <Button
            @click="toggleCityCPT"
            class="p-button-rounded mb-4 p-2"
            icon="pi pi-eye"
            label="View More"
          />
        </div>
      </div>
      <div class="col-xs-12 col-md-6 col-lg-4 mt-4">
        <div v-if="cardsActive" class="cards">
          <img class="head-pic" alt="cpt header" src="../assets/jhb.jpg" />
          <h3 class="city mt-2">Johannesburg</h3>
          <Button
            @click="toggleCityJHB"
            class="p-button-rounded mb-4 p-2"
            icon="pi pi-eye"
            label="View More"
          />
        </div>
      </div>
      <div class="col-xs-12 col-md-6 col-lg-4 mt-4">
        <div v-if="cardsActive" class="cards">
          <img class="head-pic" alt="cpt header" src="../assets/kzn.jpg" />
          <h3 class="city mt-2">Durban</h3>
          <Button
            @click="toggleCityKZN"
            class="p-button-rounded mb-4 p-2"
            icon="pi pi-eye"
            label="View More"
          />
        </div>
      </div>
    </div>
  </section>

  <BookingModal v-if="!cardsActive" />
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Button from "primevue/button";
import BookingModal from "./BookingModal.vue";
export default {
  name: "DisplayPage",
  components: {
    BookingModal,
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
.section1 {
  width: 100%;
  height: 720px;
  margin-top: 2rem;
  object-fit: cover;
  background-image: linear-gradient(
      90deg,
      #3d5f77 0%,
      rgba(61, 95, 119, 0.75) 74.71%,
      rgba(61, 95, 119, 0) 159.37%
    ),
    url("../assets/home-bg.jpg");
  background-size: cover;
  border-radius: 20px;
  z-index: -100000;
  margin-left: auto;
  margin-right: auto;
}
.p-button {
  margin-left: auto;
  margin-right: auto;
  background-color: #d4af37;
  border-color: #d4af37 !important;
}
.p-button:hover {
  background-color: #3d5f77 !important;
  border-color: #d4af37 !important;
}

.head-pic {
  width: 359.29px;
  height: 250px;
  border-radius: 20px;
}
.main-heading {
  margin-top: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  text-transform: uppercase;
  color: #ffffff;
}
.city {
  margin-left: auto;
  margin-right: auto;
}
.sub-heading {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  text-transform: uppercase;
  color: #000000;
}
.color-word2 {
  color: #3d5f77;
}
.text {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
}
.color-word {
  color: #d4af37;
}
.cards {
  border-radius: 20px;
}

@media screen and (max-width: 430px) {
  .section1 {
    width: 300px;
    height: 150px;
    top: 70px;
  }
  .card {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 150px;
  }
  .main-heading {
    font-size: 14px;
    top: 350px !important;
  }
  .text {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    width: 280px;
    margin-left: 0.7rem;
  }
  .sub-heading {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 14px;
    margin-left: auto;
    margin-right: auto;
  }
  .head-pic {
    width: 250px;
    height: 120px;
    margin-left: auto;
    margin-right: auto;
  }
  .city {
    margin-left: auto;
    margin-right: auto;
  }
  .p-button {
    margin-left: auto;
    margin-right: auto;
    background-color: #d4af37;
  }
}
</style>
