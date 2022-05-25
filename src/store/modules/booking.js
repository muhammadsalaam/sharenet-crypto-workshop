export const booking = {
  state: {
    isModalOpen: false,
    date: null,
    cart: [],
    cardsActive: true,
    venue: null,
    city: null,
    dates: ["01/06/2022", "02/06/2022", "03/06/2022"],
    cptAvail: [
      {
        city: "Cape Town",
        date: "01/06/2022",
        seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        remaining: 0,
      },
      {
        city: "Cape Town",
        date: "02/06/2022",
        seats: [0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
        remaining: 6,
      },
      {
        city: "Cape Town",
        date: "03/06/2022",
        seats: [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
        remaining: 5,
      },
    ],
    jhbAvail: [
      {
        city: "Johannesburg",
        date: "01/06/2022",
        seats: [1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
        remaining: 4,
      },
      {
        city: "Johannesburg",
        date: "02/06/2022",
        seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        remaining: 0,
      },
      {
        city: "Johannesburg",
        date: "03/06/2022",
        seats: [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
        remaining: 5,
      },
    ],

    dbnAvail: [
      {
        city: "Durban",
        date: "01/06/2022",
        seats: [1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
        remaining: 4,
      },
      {
        city: "Durban",
        date: "02/06/2022",
        seats: [0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
        remaining: 6,
      },
      {
        city: "Durban",
        date: "03/06/2022",
        seats: [1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
        remaining: 5,
      },
    ],
  },
  mutations: {
    toggleCityCPT(state) {
      state.city = "Cape Town";
      state.venue = "Tygervalley Waterfront";
      state.cardsActive = !state.cardsActive;
      console.log(state.city);
    },
    toggleCityJHB(state) {
      state.city = "Johannesburg";
      state.venue = "Edenburg, Sandton";
      state.cardsActive = !state.cardsActive;
      console.log(state.city);
    },
    toggleCityKZN(state) {
      state.city = "Durban";
      state.venue = "Greyville Convention Centre";
      state.cardsActive = !state.cardsActive;
      console.log(state.city);
    },
    toggleCards(state) {
      state.cardsActive = !state.cardsActive;
    },
    toggleCardsActive(state) {
      state.cardsActive = !state.cardsActive;
      state.city = null;
    },
    toggleDate(state, payload) {
      state.date = payload;
      state.isModalOpen = !state.isModalOpen;
      console.log(state.date);
    },
    toggleModal(state) {
      state.isModalOpen = !state.isModalOpen;
      state.date = null;
    },
    setSeats(state, payload) {
      state.availability = payload;
    },
  },
  actions: {},
  getters: {},
};
