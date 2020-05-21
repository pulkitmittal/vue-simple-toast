import { ToastData } from '@/types/toast'

export default class Toast implements ToastData {
  status: 'success' | 'error'
  message: string
  timeout?: number
  timeoutId: number | undefined
  state?: 'opening' | 'closing' | 'opened'
  updateStateTimeoutId: number | undefined

  constructor(data: ToastData) {
    this.status = data.status
    this.message = data.message
    this.timeout = data.timeout
    this.state = 'opening'
  }

  setTimeoutId(timeoutId: number) {
    this.timeoutId = timeoutId
  }

  setState(state?: 'opening' | 'closing' | 'opened') {
    this.state = state
  }

  setUpdateStateTimeoutId(timeoutId: number) {
    this.updateStateTimeoutId = timeoutId
  }
}
