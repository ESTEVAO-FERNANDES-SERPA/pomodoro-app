import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(URL:string, params?:any, loading: boolean=true):Observable<any>{
    const headers = new HttpHeaders().set('loading', 'true');
    const httpParams = new HttpParams({fromObject:params})
    let options = {}
    if(loading){
      options = {
        params:httpParams,
        headers:headers
      }
    }else{
      options = {
        params:httpParams,
      }
    }
    return this.http.get<any>(API+URL,options)
  }

  getBlob(URL:string, params?:any, loading: boolean=false):Observable<any>{
    const headers = new HttpHeaders().set('loading', 'true');
    const httpParams = new HttpParams({fromObject:params})
    let options = {}
    if(loading){
      options = {
        params:httpParams,
        headers:headers,
        responseType: 'blob'
      }
    }else{
      options = {
        params:httpParams,
        responseType: 'blob'
      }
    }
    return this.http.get<any>(URL,options)
  }

  post(URL:string, body:any,loading: boolean=true){
    const headers = new HttpHeaders().set('loading', 'true');
    let options = {}
    if(loading){
      options = {
        headers:headers
      }
    }

    return this.http.post(API+URL, body,options)
  }

  put(URL:string, body:any){

    return this.http.put(API+URL, body)
  }

  delete(URL:string){

    return this.http.delete(API+URL)
  }
}
