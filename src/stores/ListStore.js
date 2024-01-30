import { defineStore } from 'pinia'
const apiUrl = 'https://projects.sbw.media'
export const useListStore = defineStore('ListStore', {
  state: () => ({
    students: [],
    material: []

  }),
  actions: {
    async fetchStudents() {
      console.log( 'fetch students' )
      const response = await fetch(apiUrl + "/student");
      this.students = await response.json();
    },
    async fetchMaterial() {
      consolelog( 'fetch material ')
      const response = await fetch(apiUrl + "/equipment");
      this.material = await response.json();
    }
  },
  created() {
    this.fetchMaterial();
    this.fetchStudents();
  }
})