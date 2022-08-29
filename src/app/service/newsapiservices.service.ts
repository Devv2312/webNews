import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newswebapiurl
  newsApiurl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f68c976cc86e46a2b3e9a40d8f575f48"
  
  //technewsurl
  newstechurl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f68c976cc86e46a2b3e9a40d8f575f48"
 
  //businessnews
  businessurl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f68c976cc86e46a2b3e9a40d8f575f48"

  topheading():Observable<any>
  {
    return this._http.get(this.newsApiurl);
  }

  technews():Observable<any>
  {
    return this._http.get(this.newstechurl);
  }

  businessnews():Observable<any>
  {
    return this._http.get(this.businessurl);
  }
}
