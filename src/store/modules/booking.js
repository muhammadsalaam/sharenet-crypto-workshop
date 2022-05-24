export const booking = {
  state: {
    isModalOpen: false,
    date: null,
    availability: null,
    cart: [],
    cardsActive: true,
    venue: null,
    city: null,
    dates: ["01/06/2022", "02/06/2022", "03/06/2022"],
    cptAvail: [
      { date: "01/06/2022", seats: "1100100111" },
      {
        date: "02/06/2022",
        seats: "0100100110",
      },
      {
        date: "03/06/2022",
        seats: "1100101010",
      },
    ],
    jhbAvail: [
      { date: "01/06/2022", seats: "1100100111" },
      {
        date: "02/06/2022",
        seats: "0100100110",
      },
      {
        date: "03/06/2022",
        seats: "1100101010",
      },
    ],

    kznAvail: [
      { date: "01/06/2022", seats: "1100100111" },
      {
        date: "02/06/2022",
        seats: "0100100110",
      },
      {
        date: "03/06/2022",
        seats: "1100101010",
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
};
