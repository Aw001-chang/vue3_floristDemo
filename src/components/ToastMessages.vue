<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 1050">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg"></Toast>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue'
export default {
  components: {
    Toast
  },
  inject: [
    'emitter'
  ],
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>
