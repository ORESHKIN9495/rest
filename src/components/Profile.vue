<template>
  <div class="profile">
    <figure></figure>
    <p></p>
    <p>@</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
</script>

<style lang="scss" scoped>
.profile {
  padding: 20px;

  figure {
    border: 1px solid var(--scheme-v4);
    border-radius: 100%;
    height: 200px;
    margin-bottom: 40px;
    width: 200px;
  }

  p {
    color: var(--scheme-v4);
  }
}
</style>
