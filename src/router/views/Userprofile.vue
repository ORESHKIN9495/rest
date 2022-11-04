<template>
  <section class="home">
    <div class="home__items">
      <Bar />
      <Main />
      <Search />
    </div>
  </section>
</template>

<script setup>
import Bar from '../../components/Bar.vue'
import Main from '../../components/Main.vue'
import Search from '../../components/Search.vue'
</script>

<style lang="scss" scoped>
.home {
  &__items {
    display: flex;
  }
}
</style>
