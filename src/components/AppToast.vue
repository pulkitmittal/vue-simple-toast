<template>
  <div class="toasts">
    <div
      class="toast"
      v-for="(toast, index) in toasts"
      :key="index"
      :class="[toast.state, 'toast-' + index, toast.status]"
    >
      <span class="message">{{ toast.message }}</span>
      <span class="icon" @click="hide(toast)">&times;</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import store from '../store'
import Toast from '../models/Toast'

export default Vue.extend({
  name: 'AppToast',
  computed: {
    toasts(): Toast[] {
      return store.state.toast.list
    },
  },
  methods: {
    hide(toast: Toast) {
      store.dispatch('hideToast', toast)
    },
  },
})
</script>

<style lang="scss" scoped>
$success-color: #84ba56;
$error-color: #cb041f;

.toasts {
  display: flex;
  flex-direction: column;
  align-items: center;
  left: calc(50vw - 200px);
  position: fixed;
  z-index: 99;
  bottom: 30px;

  .toast {
    box-sizing: border-box;
    width: 400px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 6px 4px 16px 0 rgba(0, 0, 0, 0.12);
    padding: 8px 16px 8px 8px;
    display: flex;
    align-items: center;
    transition: opacity 0.1s ease-in, transform 0.1s ease-in-out;
    opacity: 0;

    &.success {
      background-color: $success-color;
    }
    &.error {
      background-color: $error-color;
      color: #fff;
    }

    .message {
      font-weight: bold;
      width: 346px;
    }

    .icon {
      cursor: pointer;
      margin-left: auto;
      font-size: 28px;
      line-height: 32px;
      background: #fff;
      border-radius: 2px;
      width: 32px;
      color: #000;
    }

    &.opening,
    &.closing {
      transform: translate3d(0, 32px, 0);
    }
    &.opened {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }

    @for $i from 1 through 10 {
      &.toast-#{$i} {
        &.opening,
        &.closing {
          transform: translate3d(0, #{($i - 1) * 24 + 32}px, 0);
        }
        &.opened {
          transform: translate3d(0, #{$i * 24 + 32}px, 0);
        }
      }
    }
  }
}
</style>
