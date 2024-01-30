import { defineStore } from 'pinia'

export const useSelectedStore = defineStore('SelectedStore', {
  state: () => {
    return {
      lernpartner_id: null,
      equipment_id: null,
    }
  }
})