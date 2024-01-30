<template>
  <img alt=" logo" src="../assets/logo.png">

  <div class="form">
    <lernpartner-select></lernpartner-select>
    <material-select></material-select>
    <label for="from">Von:</label>
    <input if="from" type="date" v-model="fromDate" />
    <label fro="to">Bis:</label>
    <input it="to" type="date" v-model="toDate" />
  </div>
  <div class="home-buttons">
    <button class="btn btn-primary" @click="doReserve">Reserve</button>
  </div>
</template>

<script setup>
import { useSelectedStore } from '@/stores/SelectedStore.js';
</script>
<script>

import LernpartnerSelect from '@/components/LernpartnerSelect.vue'
import MaterialSelect from '@/components/MaterialSelect.vue'
export default {
  name: 'HomeView',
  data() {
    return {
      fromDate: null,
      toDate: null,
      selectedStore: useSelectedStore()
    };
  },
  components: {
    LernpartnerSelect,
    MaterialSelect,
  },
  methods: {
    async doReserve() {
      const payload = {
        StudentID: this.selectedStore.lernpartner_id,
        EquipmentID: this.selectedStore.equipment_id,
        Start: this.fromDate,
        End: this.toDate,
      };
      const response = await fetch(this.apiUrl + '/equipment_reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      alert(result.result);
    }
  },
}
</script>

<style scoped>
  .form{
    width: 80%;
    display: grid;
    grid-template-columns: 0.4fr 0.5fr;
    gap: 1em;
}
</style>
