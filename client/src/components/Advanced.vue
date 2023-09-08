<script setup>
import Attribute from "./Attribute.vue";
</script>

<template>
  <section id="advanced">
    <section class="advanced-content">
      <h1 class="header">Advanced Statistics</h1>
      <p class="details">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <section class="attributes">
        <Attribute />
        <Attribute />
        <Attribute />
      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
#advanced {
  background: hsl(0, 0%, 95%);

  .advanced-content {
    max-width: 1440px;
    width: 100%;
    margin: auto;
    padding: 1rem 2rem;

    .header,
    .details {
      text-align: center;
    }

    .header {
      font-size: 2.3rem;
      color: hsl(260, 8%, 14%);
      margin-bottom: 20px;
    }

    .details {
      color: hsl(0, 0%, 75%);
      font-size: 1.2rem;
      max-width: 500px;
      margin: auto;
    }
  }

  .attributes {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    margin-top: 100px;

    @media (max-width: 800px) {
      flex-direction: column;
      gap: 5rem;
    }
  }
}
</style>
