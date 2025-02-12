<template>
  <section class="container">
    <h1>{{ titulo }}</h1>

    <button @click="cambioTitulo">Cambiar título</button>
    <br />
    <input type="text" v-model="sub" placeholder="Cambio de subtitulo" />
    <button @click="cambio">Cambio subtitulo</button>
    <br /><br />
    <table>
      <th>name</th>
      <th>username</th>
      <tr v-for="(item, index) in personas" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.username }}</td>
      </tr>
    </table>
    <button @click="get">Ejecutra action</button>
    <h1>Número de personas {{ contador }}</h1>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      sub: "",
    };
  },
  computed: {
    ...mapState(["titulo", "subtitulo", "personas"]),
    ...mapGetters(["contador"]),
  },
  methods: {
    ...mapMutations(["cambioTitulo", "get"]),
    ...mapActions(["get"]),
    cambio() {
      this.$store.commit("cambioSubtitulo", this.sub);
    },
  },
};
</script>
