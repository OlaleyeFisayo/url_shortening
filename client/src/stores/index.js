import { defineStore } from "pinia";
import axios from "axios";

export const useUrlStore = defineStore("urls", {
  state: () => ({
    urls: [],
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
          this.errorMessage = "";
          const { _id, originalUrl, shortenedUrl } = res.data.data;
          this.urls.unshift({
            id: _id,
            originalUrl: originalUrl,
            shortenedUrl: shortenedUrl,
            activeState: false,
          });
        })
        .catch((err) => {
          const errMessage = err.response.data.msg;
          this.errorMessage = errMessage;
        });
    },
  },
});
