import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Singer} from "../model/Singer";

@Injectable({
  providedIn: 'root'
})
export class SingerService {
private API_SINGER = environment.API_LOCAL+'singer';
  constructor(private httClient: HttpClient) { }
  getListSingerService(): Observable<any>{
    return this.httClient.get(this.API_SINGER);
  }
  createSingerService(singer: Singer): Observable<any>{
    return this.httClient.post(this.API_SINGER, singer);
  }
}
