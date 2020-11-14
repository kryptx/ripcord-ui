import axios from 'axios';

export function Invoke(method, params) {
  return axios.post(
    '/json-rpc', {
      jsonrpc: '2.0',
      method,
      params,
      id: 'ui'
    })
}
