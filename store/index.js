import axios from "axios";
export const state = () => ({
  titulo: "Mi primer nuxt con vuex",
  subtitulo: "Empezando a trabajar con la store",
  personas: [],
});

export const mutations = {
  cambioTitulo(state) {
    state.titulo = "Cambiando el titulo";
  },
  cambioSubtitulo(state, valor) {
    state.subtitulo = valor;
  },
  llenar(state, valor) {
    state.personas = valor;
  },

};

export const actions = {
  async get({ commit }) {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        commit("llenar", response.data);
      });
  },
};
