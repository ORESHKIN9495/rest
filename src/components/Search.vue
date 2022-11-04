<template>
  <section class="searchbar">
    <form>
      <input name="search" type="text" placeholder="Search post..." />
      <i class="icon-search"></i>
    </form>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.searchbar {
  height: 100vh;
  padding: 40px;
  width: 600px;

  form {
    position: relative;

    input {
      border: 1px solid var(--scheme-v4);
      border-radius: 5px;
      color: var(--scheme-v4);
      font-size: 16px;
      height: 60px;
      padding: 0 20px 0 50px;
      width: 100%;
    }

    i {
      left: 10px;
      position: absolute;
      top: 15px;
    }
  }
}
</style>
