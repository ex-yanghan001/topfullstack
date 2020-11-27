import { AxiosInstance } from 'axios'
import Vue from 'vue'
declare module 'vue/types/vue' {
  // 声明为Vue补充的东西
  interface Vue {
    $http: AxiosInstance
  }
}