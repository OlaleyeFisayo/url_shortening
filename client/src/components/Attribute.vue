<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  paragrapgh: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="attribute">
    <div class="img-container">
      <img :src="image" alt="" />
    </div>
    <h1>{{ header }}</h1>
    <p>
      {{ paragrapgh }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.attribute {
  max-width: 350px;
  width: 100%;
  padding: 1.5rem;
  position: relative;
  background: #fff;
  border-radius: 10px;
  z-index: 2;

  &:not(:last-of-type)::before {
    content: " ";
    display: block;
    width: 100%;
    height: 10px;
    background: hsl(180, 66%, 49%);
    position: absolute;
    right: -100%;
    bottom: 50%;

    @media (max-width: 800px) {
      max-width: 10px;
      height: 100%;
      bottom: -100%;
      right: 50%;
    }
  }

  &:nth-child(2) {
    margin-top: 100px;

    @media (max-width: 800px) {
      margin-top: 0;
    }
  }

  &:nth-child(3) {
    margin-top: 170px;

    @media (max-width: 800px) {
      margin-top: 0;
    }
  }

  .img-container {
    padding: 1rem;
    border-radius: 50%;
    display: inline-block;
    background: hsl(255, 11%, 22%);
    position: absolute;
    top: -40px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
    }

    @media (max-width: 800px) {
      right: calc(50% + -30px);
    }
  }

  h1 {
    margin: 30px 0 10px;
    font-size: 1.2rem;
    color: hsl(255, 11%, 22%);
  }

  p {
    font-size: 1rem;
    color: hsl(0, 0%, 75%);
  }
}
</style>
