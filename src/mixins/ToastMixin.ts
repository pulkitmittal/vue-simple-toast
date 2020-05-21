import Vue from 'vue'
import store from '@/store'
import Toast from '@/models/Toast'
import { ToastData } from '@/types/toast'

export default Vue.extend({
  methods: {
    /**
     * Show toast message with default timeout of 5 seconds.
     * If timeout is 0, the message is shown indefinitely.
     * @param data
     */
    $toast: function(data: ToastData) {
      const toast = new Toast(data)
      store.dispatch('showToast', toast)

      let timeout = +String(data.timeout)
      timeout = isNaN(timeout) ? 5000 : timeout
      if (timeout > 0) {
        const timeoutId = setTimeout(() => {
          store.dispatch('hideToast', toast)
        }, timeout)
        toast.setTimeoutId(timeoutId)
      }
      return toast
    },
  },
})
