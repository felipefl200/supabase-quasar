<template>
  <q-page padding class="flex flex-center bg-indigo-1">
    <q-card class="full-width" style="max-width: 600px">
      <q-form @submit.prevent="handleRegister" class="q-pa-xl">
        <p class="col-12 text-h5 text-center">Register</p>
        <div class="col-md-4 col-sm-6 col xs-10 q-gutter-y-sm">
          <q-input label="Name" outlined v-model="form.name"></q-input>
          <q-input label="Email" outlined v-model="form.email"></q-input>
          <q-input label="Password" outlined v-model="form.password"></q-input>
          <q-btn
            label="Register"
            type="submit"
            color="primary"
            class="full-width q-mt-md"
          />
          <q-btn
            to="login"
            label="Login"
            type="submit"
            flat
            color="primary"
            class="full-width q-mt-md"
          />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/UseAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageRegister',
  setup() {
    const router = useRouter()
    const { register } = useAuthUser()
    const handleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email },
        })
      } catch (error) {
        alert(error)
      }
    }

    const form = ref({
      name: '',
      email: '',
      password: '',
    })

    return {
      form,
      handleRegister,
    }
  },
})
</script>
