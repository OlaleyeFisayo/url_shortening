<script setup>
import Button from "./Button.vue";
</script>

<template>
  <section id="boost">
    <section class="boost-content">
      <h1>Boost your links today</h1>
      <Button :border-radius="'2rem'" :padding="'15px 45px'"
        >Get Started</Button
      >
    </section>
  </section>
</template>

<style lang="scss" scoped>
#boost {
  width: 100%;
  background-color: #2a233f;
  background-image: url("../assets/svg/bg-boost-desktop.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 800px) {
    background-image: url("../assets/svg/bg-shorten-mobile.svg");
  }

  .boost-content {
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 3rem 2rem;
    text-align: center;
    color: #fff;

    h1 {
      font-size: 2rem;
      margin-bottom: 30px;

      @media (max-width: 560px) {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
