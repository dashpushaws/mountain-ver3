import axios from 'axios'
import { baseUrl } from './_env'

export default {
  list: ()=> axios.get(`${baseUrl}/likes`),
  post: (data)=> axios.post(`${baseUrl}/likes`, data),
  delete: (id)=> axios.delete(`${baseUrl}/likes/${id}`),
}