import { defineStore } from "pinia";
import axios from "axios";

export const useUrlStore = defineStore("urls", {
  state: () => ({
    url: [],
    errorMessage: "",
  }),
  actions: {
    async createNewURL(oldUrl) {
      try {
        await axios.post("http://localhost:3000", {
          originalUrl: oldUrl
        }, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.errorMessage = "";
      } catch (error) {
        this.errorMessage = error;
      }
    },
  },
});
