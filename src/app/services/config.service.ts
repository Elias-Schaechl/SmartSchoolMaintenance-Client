import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private wsurl;
  private httpurl;

  constructor(private http: HttpClient) {
  }

  getServerWsUrl(): any {
    console.log(this.wsurl);
    return this.wsurl;
  }
  getServerHttpUrl(): any {
    console.log(this.httpurl);
    return this.httpurl;
  }

  public load() {
    console.log('load config ran...');
    this.http.get('./assets/config.json')
    .subscribe( (data) => {
      this.wsurl = data['server'].wsurl;
      this.httpurl = data['server'].httpurl;
      console.log('config reading done... ');
    });
  }
}
