<template>
  <label for="material">Gerät</label>
  <select id="material" v-model="selectedStore.equipment_id">
    <option v-for="equip in equipment" :key="equip.ID" :value="equip.ID">
      {{ equip.Name}} / {{ equip.Number }}
    </option>
  </select>
</template>


<script setup>
  import { useSelectedStore } from "@/stores/SelectedStore.js";
  const selectedStore = useSelectedStore();
</script>
<script>
export default {
  name: "MaterialSelect",
  data() {
    return {
      equipment: []
    }

  },
  created() {
    this.getEquipment();
  },
  methods: {
    async getEquipment() {
      const response = await fetch( this.apiUrl + "/equipment"
      );
      this.equipment = await response.json();
    }
  },
};
</script>

<style></style>