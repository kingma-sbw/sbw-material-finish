import { defineStore } from 'pinia'

export const useUserStore = defineStore('UserStore', {
  state: () => {
    return {
      fullname: "",
      userId: 0,
      objectId: ""
    }
  }
})