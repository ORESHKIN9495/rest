<template>
  <section class="createpost">
    <button>Post</button>
    <button>Post & replies</button>
    <button>Media</button>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.createpost {
  border-top: 1px solid var(--scheme-v4);
  border-bottom: 1px solid var(--scheme-v4);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 80px;

  button {
    color: var(--scheme-v4);

    &:hover {
      background: var(--scheme-v4);
      color: var(--scheme-v2);
    }
  }
}
</style>
