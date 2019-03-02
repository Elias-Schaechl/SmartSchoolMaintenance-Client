import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';


export interface Thing {
  thing: string;
  actor: string;
  sensor: string;
  loglevel: number;
  ip: string;

}

const ELEMENT_DATA: Thing[] = [
  {thing: 'test1', sensor: 's1', actor: 'Hydrogen', loglevel: 1, ip: '123'},
  {thing: 'test2', sensor: 's2', actor: 'Helium', loglevel: 1, ip: '123'},
  {thing: 'test3', sensor: 's3', actor: 'Lithium', loglevel: 2, ip: '123'},
  {thing: 'test4', sensor: 's4', actor: 'Beryllium', loglevel: 3, ip: '123'},
  {thing: 'test5', sensor: 's5', actor: 'Boron', loglevel: 1, ip: '123'},
  {thing: 'test6', sensor: 's6', actor: 'Carbon', loglevel: 3, ip: '123'},
  {thing: 'test7', sensor: 's7', actor: 'Nitrogen', loglevel: 1, ip: '123'},
  {thing: 'test8', sensor: 's8', actor: 'Oxygen', loglevel: 2, ip: '123'},
  {thing: 'test9', sensor: 's9', actor: 'Fluorine', loglevel: 2, ip: '123'},
  {thing: 'test10', sensor: 's10', actor: 'Neon', loglevel: 1, ip: '123'},
];

@Component({
  selector: 'app-thing-overview',
  templateUrl: './thing-overview.component.html',
  styleUrls: ['./thing-overview.component.css']
})

export class ThingOverviewComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['thing', 'sensor', 'actor', 'loglevel', 'ip'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
  }

}
