<template>
  <div class="ToastTemplate">
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

<style lang="scss" scoped>
  .ToastTemplate{
    position: fixed;
    z-index: 1050;
    top:100px;
    left: 50%;
    transform: translate(-50%,0);
  }
</style>
