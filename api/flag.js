import axios from 'axios'
import { baseUrl } from './_env'

export default {
  list: ()=> axios.get(`${baseUrl}/flag`),
  post: (data)=> axios.post(`${baseUrl}/flag`, data),
  delete: (id)=> axios.delete(`${baseUrl}/flag/${id}`),
}