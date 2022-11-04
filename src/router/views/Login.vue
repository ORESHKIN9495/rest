<template>
  <section class="login">
    <form class="login__form" method="POST" @submit.prevent="authPerson">
      <input type="text" placeholder="Username" v-model="form.username" />
      <input type="text" placeholder="Password" v-model="form.pass" />
      <button type="submit">Отправить</button>
      <router-link to="/Register">Зарегестрироваться</router-link>
    </form>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const form = {
  username: '',
  pass: '',
}

const authPerson = () => {
  const { ...user } = form
  store.dispatch('register/checkData', { user })
}
</script>

<style lang="scss" scoped>
.login {
  &__form {
    background: var(--scheme-v4);
    display: grid;
    margin: 200px auto;
    width: 400px;

    input {
      border-bottom: 1px solid var(--scheme-v2);
      margin: 20px;
      color: var(--scheme-v2);
    }

    button,
    a {
      border-radius: 5px;
      border: 1px solid var(--scheme-v2);
      color: var(--scheme-v2);
      text-align: center;
      margin: 20px;

      &:hover {
        background: var(--scheme-v2);
        color: var(--scheme-v4);
      }
    }
  }
}
</style>
