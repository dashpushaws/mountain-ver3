import axios from 'axios'
import { baseUrl } from './_env'

export default {
  // GET http:// ...:3000/list
  list: () => axios.get(`${baseUrl}/mtnList`),
  // GET http:// ...:3000/list/:id
  get: (id) => axios.get(`${baseUrl}/mtnList/${id}`),
  // GET http:// ...:3000/list?q=kewyword
  search: (keyword) => axios.get(`${baseUrl}/mtnList?q=${keyword}`),
}