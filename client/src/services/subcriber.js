
import api from './apiConfig'

export const createSubscriber = async subscribe => {
    try {
    const resp = await api.post('/subscribe', subscribe)
    console.log(resp.data)
    return resp
} catch (error) {
    throw error
}
}