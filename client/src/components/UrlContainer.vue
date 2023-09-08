<script setup>
import UrlList from "./UrlList.vue";
import { useUrlStore } from "../stores/index";
import { storeToRefs } from "pinia";

const store = useUrlStore();
const { urls } = storeToRefs(store);
</script>

<template>
  <section id="urlContainer">
    <section class="urlContainer-content">
      <UrlList
        v-for="url of urls"
        :url="url"
        :key="url._id"
        :id="url._id"
        :old-url="url.originalUrl"
        :short-url="url.shortenedUrl"
        :copied="url.copied"
      />
    </section>
  </section>
</template>

<style lang="scss" scoped>
#urlContainer {
  background: hsl(0, 0%, 95%);
  margin-top: -60px;
  padding-top: 60px;

  .urlContainer-content {
    max-width: 1440px;
    width: 100%;
    margin: auto;
    padding: 1rem 2rem;
    height: auto;
    overflow: hidden;
  }
}
</style>
