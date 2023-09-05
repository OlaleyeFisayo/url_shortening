<script setup></script>

<template>
  <nav>
    <section class="nav-content">
      <h1 class="logo">semy</h1>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 100px;

  .nav-content {
    max-width: 1440px;
    width: 100%;
    margin: auto;
    padding: 25px;

    .logo {
      text-transform: capitalize;
      font-size: 2rem;
      color: hsl(260, 8%, 14%);
      font-weight: 700;
    }
  }
}
</style>
