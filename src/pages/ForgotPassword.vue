<template>
  <q-page padding class="flex flex-center bg-indigo-1">
    <q-card class="full-width" style="max-width: 600px">
      <q-form @submit.prevent="handleResetEmail" class="q-pa-xl">
        <p class="col-12 text-h5 text-center">Reset Password</p>
        <div class="col-md-4 col-sm-6 col xs-10 q-gutter-y-sm">
          <q-input label="Email" outlined v-model="email"></q-input>

          <q-btn
            label="Send Email"
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
  name: 'PageForgotPassword',
  setup() {
    const email = ref('')
    const router = useRouter()

    const { sendPasswordRestEmail } = useAuthUser()

    const handleResetEmail = async () => {
      await sendPasswordRestEmail(email.value)
      alert(`Password reset email sent to: ${email.value}`)
      router.push({ name: 'login' })
    }

    return {
      email,
      handleResetEmail,
    }
  },
})
</script>
