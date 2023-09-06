<script setup>
import { ref } from "vue";
import { useUrlStore } from "../stores";
import { storeToRefs } from "pinia";

const store = useUrlStore();
const { errorMessage } = storeToRefs(store);
const { createNewURL } = store;
const formControl = ref({
  originalUrl: "",
});
</script>

<template>
  <section id="form">
    <section class="form-content">
      <div class="input-section">
        <input
          type="text"
          v-model="formControl.originalUrl"
          placeholder="Shorten a link here..."
          :class="{ failed: errorMessage }"
        />
        <p class="error-message" v-show="errorMessage">{{ errorMessage }}</p>
      </div>
      <button @click="createNewURL(formControl.originalUrl)">Shorten It</button>
    </section>
  </section>
</template>

<style lang="scss" scoped>
#form {
  width: 100%;
  padding: 0 2rem;

  .form-content {
    width: 100%;
    max-width: 1440px;
    margin: auto;
    padding: 3rem 2rem;
    background-color: #fff;
    background-image: url("../assets/svg/bg-shorten-desktop.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    gap: 1.5rem;
    z-index: 1;

    @media (max-width: 800px) {
      flex-direction: column;
      justify-content: none;
      align-items: center;
      background-image: url("../assets/svg/bg-shorten-mobile.svg");
      gap: 0;
    }

    button {
      border: none;
      color: #fff;
      background: hsl(180, 66%, 49%);
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
      margin: auto;
      transition: background ease-in-out 500ms;
      border-radius: 10px;
      padding: 15px 25px;

      &:hover {
        background: hsl(180, 66%, 70%);
      }

      @media (max-width: 800px) {
        display: block;
        width: 100%;
        margin-top: 20px;
      }
    }

    .input-section {
      width: 80%;
      display: flex;
      flex-direction: column;

      @media (max-width: 800px) {
        width: 100%;
      }

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

        &.failed {
          border: 1px solid hsl(0, 87%, 67%);
          box-shadow: 0 0 0 0;
        }
      }

      .error-message {
        position: absolute;
        bottom: 24px;
        color: hsl(0, 87%, 67%);
        font-style: italic;
        font-size: 14px;
        width: 76.5%;

        @media (max-width: 800px) {
          position: relative;
          margin: 5px 0 0;
          width: 100%;
          text-align: center;
          bottom: 0;
        }
      }
    }
  }
}
</style>
