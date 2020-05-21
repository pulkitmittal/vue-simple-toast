<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>Demo for vue-simple-toast</h1>
    <p>
      <button @click="showSuccessToast">Show Success Toast</button>
      <button @click="showErrorToast">Show Error Toast</button>
      <button @click="showToastWithNoAutoClose">No auto close</button>
      <button @click="showToastWithTimeout2">Timeout 2 seconds</button>
    </p>
    <app-toast></app-toast>
  </div>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import ToastMixin from './mixins/ToastMixin'

export default mixins(ToastMixin).extend({
  name: 'App',
  components: {},
  methods: {
    showSuccessToast() {
      this.$toast({ message: 'This is a success message!', status: 'success' })
    },
    showErrorToast() {
      this.$toast({ message: 'Oops! Error!', status: 'error' })
    },
    showToastWithNoAutoClose() {
      this.$toast({
        message: 'This error message does not close automatically',
        status: 'error',
        timeout: 0,
      })
    },
    showToastWithTimeout2() {
      this.$toast({
        message: 'This success message closes after 2 seconds',
        status: 'success',
        timeout: 2000,
      })
    },
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
