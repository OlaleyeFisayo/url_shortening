<script setup>
defineProps({
  borderRadius: {
    type: String,
    required: true,
  },
  padding: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    :style="{
      'border-radius': borderRadius,
      'padding': padding,
    }"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
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

  &:hover {
    background: hsl(180, 66%, 70%);
  }
}
</style>
