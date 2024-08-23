import { AxiosResponse } from 'axios';

export interface ApiResponse<T = unknown> {
  data: T;
}

export interface ApiError {}

export type Api<P, R> = (payload: P) => Promise<AxiosResponse<ApiResponse<R>, ApiError>>;
