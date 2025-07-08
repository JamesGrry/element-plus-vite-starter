import type { AxiosRequestConfig } from "axios"
export type RequestContentType = 'json' | 'form' | 'upload' | 'custom'
export type RequestOptions = AxiosRequestConfig & {
    contentType?: 'json' | 'form' | 'upload' | 'custom'
    needToken?: boolean
}