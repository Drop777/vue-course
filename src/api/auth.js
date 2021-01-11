import axios from '@/api/axios'

export const register = (credentials) => {
  return axios.post('/users', {user: credentials})
}
