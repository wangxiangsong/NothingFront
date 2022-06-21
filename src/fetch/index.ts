// import { request } from 'umi';
import { extend } from 'umi-request';
import { message } from 'antd';

interface ResponseType {
  code: number;
  data: any;
  msg: string;
  status: number;
}
// const [modal] = Modal.useModal();
const ContentType = {
  JSON: 'application/json; charset=UTF-8',
  FORM: 'application/x-www-form-urlencoded; charset=UTF-8',
};

// common check
const checkStatus = (response: any, type?: any) => {
  if (response.status === 204) return response;
  if ([200, 201, 202].includes(response.status)) {
    if (type === 'file') {
      return response;
    }
    return response;
  }
  // throw new Error(response.status)
  const { status } = response;
  const pureResponse = response.json();
  if (type !== 'ignore') {
    if ([400].includes(status)) {
      pureResponse.then((res: any) => {
        message.error(res.message || res.msg || '未知异常！');
      });
    } else {
      switch (status) {
        case 404:
          message.error('未找到远程服务器');
          break;
        case 401:
          message.error({
            content: '会话信息缺失，请重新登录',
            duration: 1,
          });
          setTimeout(() => {
            const loginPath = localStorage.getItem('loginPath') || '/login';
            let str: any = window.location.href.lastIndexOf('#');
            if (str !== -1) {
              str = window.location.href.substring(0, str + 1);
              window.location.href = `${str}${loginPath}`;
            } else {
              console.warn('跳转失败');
            }
          }, 1500);
          break;
        case 500:
          break;
        case 502:
          message.error('Bad Gateway');
          break;
        case 503:
          message.error('Service Unavailable');
          break;
        case 504:
          message.error('Gateway Timeout');
          break;
        default:
          message.error('服务器异常');
          break;
      }
    }
  }
  return response;
};

const request = extend({
  timeout: 50000000,
  errorHandler: (error: { response: Response }): Response => {
    const { response } = error;
    return checkStatus(response);
  },
});

request.interceptors.request.use(
  (url, options) => {
    const obj = {
      url,
      options: {
        ...options,
        headers: {
          ...options.headers,
          Accept: ContentType.JSON,
          'Content-Type': ContentType.JSON,
          Token: localStorage.getItem('user_token')!,
        },
      },
    };
    return obj;
  },
  {
    global: false,
  },
);

// request.interceptors.response.use((response: any) => {
//   return checkStatus(response);
// });

export class Fetch {
  #signal: AbortSignal;
  #controller: AbortController;

  constructor() {
    this.#controller = new AbortController();
    this.#signal = this.#controller.signal;
  }

  // get
  async get<T extends Object>(url: string, params: T) {
    return request(url, {
      params,
      method: 'get',
    });
  }
  // post
  async post<T extends Object>(url: string, data?: T, query?: any) {
    return request(url, {
      params: query,
      data,
      method: 'post',
      signal: this.#signal,
    });
  }

  async delete<T extends Object>(url: string) {
    try {
      const res = await request(url, {
        method: 'delete',
      });
      return res;
    } catch (error) {
      console.error('delete', error);
    }
  }

  getNotFilter(url: string) {
    return request(url, {
      method: 'get',
    });
  }

  // 取消请求
  abort() {
    this.#controller.abort();
  }
}

export default new Fetch();
