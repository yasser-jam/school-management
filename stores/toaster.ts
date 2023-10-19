import { defineStore } from 'pinia'

export const useToasterStore = defineStore('toaster', () => {
  const showToaster = ref(false)
  const toasterType = ref('info')
  const message = ref('')

  const showMessage = (__message:string) => {
    showToaster.value = true
    message.value = __message
  }

  const showSuccessToaster = (message:string) => {
    toasterType.value = 'success'
    showMessage(message)
  }

  const showErrorToaster = (message:string) => {
    toasterType.value = 'error'
    showMessage(message)
  }
  return {
    showToaster,
    toasterType,
    message,
    showSuccessToaster,
    showErrorToaster,
  }
})
