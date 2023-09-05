import { defineStore } from "pinia";
import axios from "axios";

export const useUrlStore = defineStore("urls", {
  state: () => ({
    url: [],
    errorMessage: "",
  }),
  actions: {
    async createNewURL(oldUrl) {
      await axios
        .post(
          "http://localhost:3000",
          {
            originalUrl: oldUrl,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.errorMessage = "";
        })
        .catch((err) => {
          const errMessage = err.response.data.msg;
          this.errorMessage = errMessage;
        });
    },
  },
});
