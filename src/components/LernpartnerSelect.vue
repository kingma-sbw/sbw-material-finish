<template>
  <label for="lernpartner">Lernpartener</label>
  <select id="lernpartner" v-model="selectedStore.lernpartner_id">
    <option v-for="LP in LPs" :key="LP.ID" :value="LP.ID">
      {{ LP.Fullname }}
    </option>
  </select>
</template>

<script setup>
import { useSelectedStore } from "@/stores/SelectedStore.js";
const selectedStore = useSelectedStore();
</script>

<script>
export default {
  name: "LernpartnerSelect",
  data() {
    return {
      LPs: []
    };

  },
  created() {
    this.getLPs();
  },
  methods: {
    async getLPs() {
      const response = await fetch( this.apiUrl + "/student" );
      this.LPs = await response.json();
    }
  },
};

</script>

<style></style>