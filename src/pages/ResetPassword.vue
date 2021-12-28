<template>
  <q-page padding class="flex flex-center bg-indigo-1">
    <q-card class="full-width" style="max-width: 600px">
      <q-form @submit.prevent="handleResetPassword" class="q-pa-xl">
        <p class="col-12 text-h5 text-center">Reset Password</p>
        <div class="col-md-4 col-sm-6 col xs-10 q-gutter-y-sm">
          <q-input
            label="New Password"
            outlined
            v-model="newPassword"
          ></q-input>

          <q-btn
            label="New Password"
            type="submit"
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
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'PageResetPassword',
  setup() {
    const { resetPassword } = useAuthUser()

    const route = useRoute()

    const token = route.query.token

    const router = useRouter()

    const newPassword = ref('')

    const handleResetPassword = async () => {
      await resetPassword(token, newPassword.value)
      router.push({ name: 'login' })
    }

    return {
      newPassword,
      handleResetPassword,
    }
  },
})
</script>
