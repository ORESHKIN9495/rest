<template>
  <section class="content">
    <form class="content__form" method="POST" @submit.prevent="createPerson" v-if="!store.state.register.confirmed">
      <input type="text" placeholder="Name" v-model="form.name" />
      <input type="text" placeholder="Username" v-model="form.username" />
      <input type="text" placeholder="Email" v-model="form.mail" />
      <input type="text" placeholder="Password" v-model="form.pass" />
      <button type="submit">Отправить</button>
    </form>

    <p v-else>Congratulations <br /><router-link to="/">Войти</router-link></p>
  </section>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const form = {
  name: '',
  username: '',
  mail: '',
  pass: '',
}

const createPerson = () => {
  const { ...user } = form
  store.dispatch('register/postData', { user })
}
</script>

<style lang="scss" scoped>
.content {
  &__form {
    background: var(--scheme-v4);
    display: grid;
    margin: 200px auto;
    width: 400px;
    height: 500px;

    input {
      border-bottom: 1px solid var(--scheme-v2);
      margin: 20px;
      color: var(--scheme-v2);
    }

    button {
      border: 1px solid var(--scheme-v2);
      color: var(--scheme-v2);
      border-radius: 5px;
      margin: 20px;

      &:hover {
        background: var(--scheme-v2);
        color: var(--scheme-v4);
      }
    }
  }

  &__result {
    display: flex;
    background: rgb(177, 177, 177);
    margin: 20px 0;
    padding: 40px;

    p {
      margin-right: 20px;
    }

    svg {
      cursor: pointer;
      width: 30px;
      margin: 0 0 0 auto;
    }
  }

  &__item {
    text-align: center;
  }
}
</style>
