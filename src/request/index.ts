import { Method } from 'axios';

export enum ChzzkRequestServerType {
  Chzzk,
  Common,
  Naver,
}

export interface ChzzkRequest {
  serverType: ChzzkRequestServerType;
  method: Method;
  path: string;
  extraHeaders?: Record<string, string>;
  data?: any;
}

export interface ChzzkResponse<T> {
  status: number;
  data: ChzzkResponseData<T>;
}

export interface ChzzkResponseData<T> {
  code: number;
  message: string | null;
  content: T;
}
