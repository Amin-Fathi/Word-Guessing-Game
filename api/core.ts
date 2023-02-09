import axios from 'axios';
import axiosConfig from './config.ts';
import axiosMock from 'axios-mock-adapter';

class BaseApi {
  readonly _apiCore;
  readonly _basePath: string;
  readonly _apiCoreMock: string;
  private static instance: BaseApi;

  private constructor(apiCore, basePath, apiCoreMock) {
    this._apiCore = apiCore;
    this._basePath = basePath;
    this._apiCoreMock = apiCoreMock;
  }

  static getInstance() {

    const apiCore = axios.create(axiosConfig);


    //request interceptor
    apiCore.interceptors.request.use(
      function (config) {
        console.log("interceptors request config")
        return config;
      },
      function (error) {
        console.log("interceptors request error")
        return Promise.reject(error);
      }
    );

    //response interceptor
    apiCore.interceptors.response.use(

      function (response) {
        console.log("interceptors request response")
        return response;
      },
      function (error) {
        console.log("interceptors response error")
        return Promise.reject(error);
      }
    );
    const apiCoreMock = new axiosMock(apiCore, { delayResponse: 2000 });
    const basePath = 'https://www.lendo.org/api';
    if (this.instance) {
      return this.instance;
    }

    this.instance = new BaseApi(apiCore, basePath, apiCoreMock);
    return this.instance;
  }
}

const baseApi = BaseApi.getInstance();


export default baseApi;
