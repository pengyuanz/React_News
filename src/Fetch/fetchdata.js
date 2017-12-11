import axios from 'axios'
//BASE_URL是默认的url地址，如果你安装了webpack，可以在webpack配置全局变量
export default function get(paramters,fn) {
  axios.get('/news', {
    params: paramters
  }).then(function(response) {
    fn(response);
  }).catch(function(response){
    return response;
  })
}

export function post(paramters,fn) {
}
export function jsonp(paramters,fn) {
}