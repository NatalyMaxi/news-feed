import axios, { AxiosRequestConfig } from 'axios';

import { API_BASE_URL } from '../../constants/network';

export async function apiFetch<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    const response = await axios({
      baseURL: API_BASE_URL,
      url,
      ...config,
      headers: {
        'Cache-Control': 'no-cache',
        ...(config?.headers || {}),
      },
    });

    return response.data as T;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message ?? error.message;
      throw new Error(message);
    }
    throw new Error('Unknown error');
  }
}
