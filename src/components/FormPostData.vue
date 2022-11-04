<template>
  <form @submit.prevent="formSubmit" method="POST">
    <textarea id="t" cols="30" rows="10" @keyup="resizeTextarea" placeholder="Create new post..." v-model="area"></textarea>
    <button v-if="showSend" type="submit">Send</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const area = ref('')

const user = JSON.parse(localStorage.getItem('user'))

const showSend = ref(false)

const formSubmit = () => {
  store.dispatch('posts/postData', { message: area.value, uid: user.uid })
  showSend.value = false
  area.value = ''

  const textarea = document.getElementById('t')

  textarea.style.height = 40 + 'px'
}

const resizeTextarea = (e) => {
  showSend.value = true
  const heightArea = e.target

  if (area.value !== '') {
    heightArea.style.height = heightArea.scrollHeight + 'px'
  } else {
    showSend.value = false
  }
}
</script>

<style lang="scss" scoped>
form {
  background: var(--scheme-v4);
  border-radius: 5px;
  margin: 20px;
  padding: 20px;

  textarea {
    background: transparent;
    border: none;
    color: var(--scheme-v2);
    font-size: 16px;
    font-family: inherit;
    height: 40px;
    outline: none;
    overflow: hidden;
    padding: 10px;
    resize: none;
    transition: height 0.1s ease-in-out;
    width: 100%;
  }

  button {
    border: 1px solid var(--scheme-v2);
    border-radius: 5px;
    color: var(--scheme-v2);
    margin-top: 20px;
    outline: none;
    padding: 5px 40px;
  }
}
</style>
