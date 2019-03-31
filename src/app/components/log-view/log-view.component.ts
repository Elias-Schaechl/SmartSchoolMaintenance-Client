import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Logs } from 'src/app/logs';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-log-view',
  templateUrl: './log-view.component.html',
  styleUrls: ['./log-view.component.css']
})
export class LogViewComponent implements OnInit {

  logLimit = 100;
  public logList: Logs[] = [];
  displayedColumns: string[] = ['thing', 'id', 'tag', 'loglevel', 'time', 'message'];
  dataSource = new MatTableDataSource(this.logList);
  private filterThing = '';
  private filterLogLevel = '';

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.connectToWS((log) => this.addLogToList(log));
    console.log(this.dataSource);
  }

  updateData() {
    this.dataSource.filter['thing'] = this.filterThing.trim().toLowerCase();
    this.dataSource.filter['loglevel'] = this.filterLogLevel.trim().toLowerCase();
  }

  applyFilterThing(filterValue: string) {
    this.filterThing = filterValue;
    this.updateData();
  }

  applyFilterLogLevel(filterValue: string) {
    this.filterLogLevel = filterValue;
    this.updateData();
  }

  addLogToList(nlog: string) {
    try {
      const log: Logs = JSON.parse(nlog);
      log.time = Date.now();
      if(this.logList.length >= 1000){
        this.logList.pop();
        this.logList.unshift(log);
      } else {
        this.logList.unshift(log);
      }
      this.dataSource = new MatTableDataSource(this.logList);
      this.updateData();
    } catch (error) {}
  }




}
