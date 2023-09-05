import { defineStore } from "pinia";
import axios from "axios";

export const useUrlStore = defineStore("urls", {
  state: () => ({
    url: [],
    errorMessage: "",
  }),
  actions: {
    async createNewURL(url) {
      try {
        await axios.post("http://localhost:3000", url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.errorMessage = ""
      } catch (error) {
        this.errorMessage = error;
      }
    },
  },
});
