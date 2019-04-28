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

  constructor(private http: HttpClient) {
    console.log('Constructor of DataService() ran...');
    this.subject = webSocket({
      url: 'ws://localhost:8080',
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
    return this.http.get<Thing[]>('http://localhost:3000/things');
  }

  getThingState(ip) {
    console.log('getThigState ran...');
    return this.http.get('http://localhost:3000/state?ip=' + ip, {responseType: 'text'});
  }

  restartThing(ip) {
    console.log('resetThig ran...');
    return this.http.get('http://localhost:3000/reset?ip=' + ip,  {responseType: 'text'});
  }

  resetThing(ip) {
    console.log('resetThig ran...');
    return this.http.get('http://localhost:3000/factory?ip=' + ip,  {responseType: 'text'});
  }

  updateConfig(ip, key, value) {
    console.log('changeConfig ran...');
    const query = `http://localhost:3000/setconfig?ip=${ip}&key=${key}&value=${value}`;
    console.log(query);
    return this.http.get(query,  {responseType: 'text'});
  }

  dummyFunc(a: string): any {
  }


}
