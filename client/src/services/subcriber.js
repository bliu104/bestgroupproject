
import api from './apiConfig'

export const createSubscriber = async subscribe => {
  try {
    const resp = await api.post('/subscribe', subscribe)
    return resp
  } catch (error) {
    throw error
  }
}