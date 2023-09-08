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
            _id,
            originalUrl,
            shortenedUrl,
            copied: false,
          });
        })
        .catch((err) => {
          const errMessage = err.response.data.msg;
          this.errorMessage = errMessage;
        });
    },
    async copyLink(id) {
      const urlData = this.urls.find((url) => url._id === id);
      urlData.copied = true;
      await navigator.clipboard.writeText(
        `http://localhost:3000/${urlData.shortenedUrl}`
      );
      setTimeout(() => {
        urlData.copied = false;
      }, 2000);
    },
  },
});
