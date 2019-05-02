import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thing } from '../thing';
import { webSocket } from 'rxjs/webSocket';
import { Logs } from 'src/app/logs';
import { strictEqual } from 'assert';
//import * as SimpleWS from 'simple-websocket';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private subject;
  private socket;
  private addLog;
  private wsurl;
  private httpurl;

  constructor(private http: HttpClient, private configService: ConfigService) {
    console.log('Constructor of DataService() ran...');
    this.httpurl = configService.getServerHttpUrl();
    this.wsurl = configService.getServerWsUrl();

    this.subject = webSocket({
      url: this.wsurl,
      deserializer: (msg) => msg
    });
    this.addLog = this.dummyFunc;
    this.subject.subscribe(
      (msg) => {
          const log: Logs = msg.data;
          this.addLog(log);
      },
      (err) => console.log(err),
      () => console.log('complete')
    );
  }

  connectToWS(target) {
    this.addLog = target;
  }

  getThings(): Observable<Thing[]> {
    console.log('getThigs ran...');
    return this.http.get<Thing[]>(this.httpurl + '/things');
  }

  getThingState(ip) {
    console.log('getThigState ran...');
    return this.http.get(this.httpurl + '/state?ip=' + ip, {responseType: 'text'});
  }

  restartThing(ip) {
    console.log('resetThig ran...');
    return this.http.get(this.httpurl + '/reset?ip=' + ip,  {responseType: 'text'});
  }

  resetThing(ip) {
    console.log('resetThig ran...');
    return this.http.get(this.httpurl + '/factory?ip=' + ip,  {responseType: 'text'});
  }

  updateConfig(ip, key, value) {
    console.log('changeConfig ran...');
    const query = this.httpurl + `/setconfig?ip=${ip}&key=${key}&value=${value}`;
    console.log(query);
    return this.http.get(query,  {responseType: 'text'});
  }

  dummyFunc(a: string): any {
  }


}
