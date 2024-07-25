import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

// from HttpClient.get() API
export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  context?: HttpContext;
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType: 'arraybuffer';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  website: string;
}

export interface Column {
  header: 'Name' | 'Email' | 'Website';
  field: 'name' | 'email' | 'website';
}
