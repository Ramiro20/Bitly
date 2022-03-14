import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  urlBitly = 'https://api-ssl.bitly.com/v4/bitlinks';
  token = '1276e5a6a32c86dad335c54cce41c35d5bf53690';
  constructor(private http: HttpClient) { }

  getUrlShort(url: string): Observable<any>{
    const token = this.getToken();
      const body = {
        long_url: url
      };

      return this.http.post(this.urlBitly, body, { headers: token});
  }

  getToken(){
    const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + this.token});
    return tokenHeader;
  }

}
