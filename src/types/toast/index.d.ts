declare namespace Toast {
  interface ToastData {
    status: 'success' | 'error'
    message: string
    timeout?: number
  }
}

export = Toast
