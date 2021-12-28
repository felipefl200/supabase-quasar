import { useQuasar } from 'quasar'
export default function useNotify() {

  const $q = useQuasar()

  const notifySuccess = (message) => {
    $q.notify({
      type: 'positive',
      message: message || 'All rigth!'
    })
  }

  const notifyError = (message) => {
    $q.notify({
      type: 'negative',
      message: message || 'Whoops! Something bad happened'
    })
  }

  return { notifyError, notifySuccess }
}
