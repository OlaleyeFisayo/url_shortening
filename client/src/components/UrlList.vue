<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  oldUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <section class="urlList active">
    <p class="oldUrl">{{ oldUrl }}</p>
    <a
      class="shortUrl"
      :href="`http://localhost:3000/${shortUrl}`"
      target="_blank"
      >{{ shortUrl }}</a
    >
    <button>Copy</button>
  </section>
</template>

<style lang="scss" scoped>
.urlList {
  background: #fff;
  display: grid;
  grid-template-columns: 65% 20% 10%;
  justify-content: space-between;
  padding: 1.2rem 2rem;
  border-radius: 5px;
  -webkit-box-shadow: 0 5px 6px -6px #777;
  -moz-box-shadow: 0 5px 6px -6px #777;
  box-shadow: 0 5px 6px -6px #777;
  align-items: center;
  gap: 1rem;
  animation: dropDown 500ms linear;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }

  .oldUrl,
  .shortUrl {
    word-wrap: normal;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .oldUrl,
  .shortUrl,
  button {
    font-size: 1.05rem;
    width: 100%;

    @media (max-width: 800px) {
      font-size: 0.95rem;
    }
  }

  .oldUrl {
    @media (max-width: 800px) {
      border-bottom: 1px solid hsl(0, 0%, 75%);
      padding-bottom: 15px;
    }
  }

  .shortUrl {
    text-decoration: none;
    color: hsl(180, 66%, 49%);
  }

  button {
    display: inline-block;
    color: #fff;
    border: none;
    cursor: pointer;
    background: hsl(180, 66%, 49%);
    font-weight: 600;
    padding: 10px 0;
    border-radius: 5px;
    transition: background 500ms ease-in-out;

    &:hover {
      background: hsl(180, 66%, 70%);
    }
  }
}

@keyframes dropDown {
  0% {
    transform: translateY(calc(-100% + -60px));
  }

  100% {
    transform: translateY(0);
  }
}
</style>
