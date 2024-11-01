import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_BASE_URL : "/api",
  timeout: 30 * 1000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = {
      code: response.status,
      data: response.data,
    };
    return res as any;
  },
  (error) => {
    let msg = "Unknown error";
    if (error.response) {
      switch (error.response.status) {
        case 400:
          msg = "Request Error (400)";
          break;
        case 401:
          msg = "Unauthorized (401)";
          break;
        case 403:
          msg = "Forbidden (403)";
          break;
        case 404:
          msg = "Not Found (404)";
          break;
        case 500:
          msg = "Server Error (500)";
          break;
        default:
          msg = `${error.response.status}`;
      }
    } else {
      msg = error.message;
    }
    return Promise.reject(msg);
  }
);

interface AxiosResponseInfoProps {
  message?: string;
  reason?: string;
}

// 批量覆盖
type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

type AxiosResponseProps<T = any, D = any> = Merge<
  AxiosResponse<T, D>,
  {
    code?: number;
    message?: string;
  }
>;

export interface requestConfig<T = any> extends AxiosRequestConfig<T> {
  params?: T;
  /** @name 自定义接口域名 */
  diyHome?: string;
}

export function NetWorkApi<T, D>(params: requestConfig<T>): Promise<D> {
  return new Promise((resolve, reject) => {
    instance(params)
      .then((res) => {
        handleAxios(res, resolve, reject);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

export const handleAxios = (
  res: AxiosResponseProps<AxiosResponseInfoProps>,
  resolve: any,
  reject: any
) => {
  const { code, message, data } = res;
  if (!code) {
    reject("请求超时，请重试");
    return;
  }
  switch (code) {
    case 200:
      resolve(data);
      break;
    default:
      reject(message);
      break;
  }
};

export default instance;
