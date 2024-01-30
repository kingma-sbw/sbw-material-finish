<template>
  <label for="material">Gerät</label>
  <select id="material" v-model="store.equipment_id">
    <option v-for="equip in equipment" :key="equip.ID" :value="equip.ID">
      {{ equip.Name}} / {{ equip.Number }}
    </option>
  </select>
</template>


<script setup>
  import { store } from "@/store";
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
      const response = await fetch(
        "https://projects.sbw.media/equipment"
      );
      this.equipment = await response.json();
    }
  },
};
</script>

<style></style>