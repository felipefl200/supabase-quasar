<template>
  <q-page class="flex flex-center">
    <div>
      <h3>Thanks for register</h3>

      <h6>
        Please enter your email: <strong>{{ $route.query.email }}</strong>
      </h6>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation',
})
</script>
