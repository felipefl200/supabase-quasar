<template>
  <q-page class="flex flex-center bg-indigo-1">
    <q-card bordered flat class="q-pa-lg">
      <q-card-section>
        <h4 class="text-h5 text-center">Login</h4>
        <q-form @submit.prevent="handleLogin" class="q-gutter-y-xs">
          <q-input label="Email" outlined v-model="form.email" />
          <q-input label="Password" outlined v-model="form.password" />
          <q-btn
            label="Login"
            unelevated
            :ripple="false"
            type="submit"
            color="primary"
            class="full-width q-mt-md"
          />
          <q-btn
            to="register"
            label="Register"
            flat
            color="primary"
            class="full-width q-mt-md"
          />
          <q-btn
            to="forgot-password"
            label="Forgot Password"
            flat
            color="primary"
            class="full-width q-mt-md"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageLogin',
  setup() {
    const router = useRouter()
    const { login } = useAuthUser()

    const handleLogin = async () => {
      try {
        await login(form.value)
        router.push({ name: 'me' })
      } catch (error) {
        alert(error.message)
      }
    }

    const form = ref({
      email: '',
      password: '',
    })
    return {
      form,
      handleLogin,
    }
  },
})
</script>
<style scoped>
.q-card {
  width: 400px;
}
</style>
