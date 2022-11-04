<template>
  <section class="main">
    <Profile />
    <div class="main__post">
      <Createpost />
      <FormPostData />
      <Sendpost />
    </div>
  </section>
</template>

<script setup>
import Sendpost from './Sendpost.vue'
import FormPostData from './FormPostData.vue'
import Createpost from './Createpost.vue'
import Profile from './Profile.vue'
</script>

<style lang="scss" scoped>
.main {
  border-left: 1px solid var(--scheme-v4);
  border-right: 1px solid var(--scheme-v4);
  height: 100vh;
  margin: 0 auto;
  max-width: var(--scheme-max-width);
  width: 100%;

  &__post {
  }
}
</style>
