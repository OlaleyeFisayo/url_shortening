<script setup>
import Button from "./Button.vue";
import { ref } from "vue";
import { useUrlStore } from "../stores";

const store = useUrlStore
const formControl = ref("");
</script>

<template>
  <section id="form">
    <section class="form-content">
      <div class="input-section">
        <input
          type="text"
          v-model="formControl"
          placeholder="Shorten a link here..."
        />
        <p class="error-message">
            {{ store.errorMessage }}
        </p>
      </div>
      <Button :border-radius="'10px'" :padding="'15px 25px'"
        >Shorten It!</Button
      >
    </section>
  </section>
</template>

<style lang="scss" scoped>
#form {
  width: 100%;

  .form-content {
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 3rem 2rem;
    background-image: url("../assets/svg/bg-shorten-desktop.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;

    .input-section {
      width: 80%;
      display: flex;
      flex-direction: column;
      input {
        display: block;
        padding: 15px 25px;
        border: none;
        border-radius: 0.5rem;
        outline: none;
        width: 100%;
        box-shadow: inset 0 0 1px 1px #888;

        &::placeholder {
          font-weight: 600;
          color: hsl(0, 0%, 75%);
        }
      }
    }
  }
}
</style>
