import Vue from 'vue';
import Axios from 'axios';
import { Toast } from 'vant';

Vue.use(Toast);

// 创建axios实例
const SERVICE = Axios.create({
  baseURL: '',
  timeout: 10000
});

// requset拦截器
SERVICE.interceptors.request.use(
  (config) => {
    // config.data.clienttype = 'app';
    // config.data.sessionid = '4965ee17-2b16-11e7-a290-005056a81ee6'
    if (config.method === 'psot') {
      config.data = JSON.stringify(config.data);
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// response拦截器
SERVICE.interceptors.response.use(
  response => {
    const res = response.data;
    console.log('返回的res编码: ' + res.code);
    // 服务器返回0 是正常 其他都是错误
    if (res.code !== 0) {
      return Promise.reject(res.msg);
    } else {
      return response.data;
    }
  },
  error => {
    console.log('err' + error);
    return Promise.reject(error);
  }
);

export default {
  // fechPost 请求方式
  fetchPost: function(url, params) {
    return new Promise((resolve, reject) => {
      Axios.post(url, params)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  // get 请求方式
  fetchGet: function(url, params) {
    return new Promise((resolve, reject) => {
      Axios.get(url, {
        params: params
      })
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

