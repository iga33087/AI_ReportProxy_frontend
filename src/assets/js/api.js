import axios from 'axios'
import { ElMessage } from 'element-plus'

const instance = axios.create();
instance.defaults.baseURL = "/api"

instance.interceptors.response.use((response)=> {
  if(response.data?.status<0) {
    throw response
  }
  return response;
}, function (error) {
  //const store = useStore();
  ElMessage.error(error?.response?.data ? JSON.stringify(error.response.data) : error.message)
  //store.$patch({loading:false})
  return Promise.reject(error);
});

export default {
  getTest() {
    return instance.get(`/`).then(res=>res.data)
  },
  getDevice() {
    return instance.get(`/device/`).then(res=>res.data)
  },
  postDevice(x) {
    return instance.post(`/device/`,x).then(res=>res.data)
  },
  putDevice(x) {
    return instance.put(`/device/${x.id}`,x).then(res=>res.data)
  },
  delDevice(x) {
    return instance.delete(`/device/${x.id}`).then(res=>res.data)
  },
  postReport(x) {
    return instance.post(`/report/`,x).then(res=>res.data)
  }
}