import { defineStore } from "pinia";

export const useUrlStore = defineStore("urls", {
  state: ()=> ({
    url: [],
    errorMessage: ""
  }),
  actions: {},
});
