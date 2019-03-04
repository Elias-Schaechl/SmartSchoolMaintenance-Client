import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thing } from '../thing';
import { webSocket } from 'rxjs/webSocket';
import { Logs } from 'src/app/logs';
//import * as SimpleWS from 'simple-websocket';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private subject;
  private socket;
  private addLog;

  constructor(private http: HttpClient) {
    this.subject = webSocket({
      url: 'ws://localhost:8080',
      deserializer: (msg) => msg
  });
  }

  connectToWS(target) {

    this.addLog = target;
    this.subject.subscribe(
      (msg) => {
          const log: Logs = msg.data;
          this.addLog(log);
      },
      (err) => console.log(err),
      () => console.log('complete')
    );
  }

  getThings(): Observable<Thing[]> {
    console.log('getThigs ran...');
    return this.http.get<Thing[]>('http://localhost:3000/things');
  }
}
