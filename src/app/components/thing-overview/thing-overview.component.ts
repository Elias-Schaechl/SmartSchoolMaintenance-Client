import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Thing } from 'src/app/thing';
import { DataServiceService } from 'src/app/services/data-service.service';




const ELEMENT_DATA = [
  {thing: 'test3', sensor: 's1', actor: 'Hydrogen', loglevel: 1, ip: '123', macaddress: '', ping: 0, lrtime: 0},
  {thing: 'test2', sensor: 's2', actor: 'Helium', loglevel: 1, ip: '123', macaddress: '', ping: 0, lrtime: 0},
  {thing: 'test1', sensor: 's3', actor: 'Lithium', loglevel: 2, ip: '123', macaddress: '', ping: 0, lrtime: 0},
  {thing: '1est4', sensor: 's4', actor: 'Beryllium', loglevel: 3, ip: '123', macaddress: '', ping: 0, lrtime: 0},
  {thing: 'test5', sensor: 's5', actor: 'Boron', loglevel: 1, ip: '123', macaddress: '', ping: 0, lrtime: 0},
  {thing: 'test6', sensor: 's6', actor: 'Carbon', loglevel: 3, ip: '123', macaddress: '', ping: 0, lrtime: 0},
  {thing: 'test7', sensor: 's7', actor: 'Nitrogen', loglevel: 1, ip: '123', macaddress: '', ping: 0, lrtime: 0},
  {thing: 'test8', sensor: 's8', actor: 'Oxygen', loglevel: 2, ip: '123', macaddress: '', ping: 0, lrtime: 0},
  {thing: 'aest9', sensor: 's9', actor: 'Fluorine', loglevel: 2, ip: '123', macaddress: '', ping: 0, lrtime: 0},
  {thing: 'test10', sensor: 's10', actor: 'Neon', loglevel: 1, ip: '123', macaddress: '', ping: 0, lrtime: 0},
];


@Component({
  selector: 'app-thing-overview',
  templateUrl: './thing-overview.component.html',
  styleUrls: ['./thing-overview.component.css']
})

export class ThingOverviewComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  public thingList: Thing[];
  displayedColumns: string[] = ['thing', 'sensor', 'actor', 'loglevel', 'ip', 'lrtime', 'ping'];
  dataSource = new MatTableDataSource(this.thingList);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    this.dataService.getThings().subscribe((data) => {
      this.thingList = data;
      this.dataSource = new MatTableDataSource(this.thingList);
      this.sortThingList();
    });
    // this.thingList = ELEMENT_DATA;
  }
  sortThingList() {
    this.thingList.sort((t1, t2) => 0 - (t1.thing < t2.thing ? 1 : -1));
  }

}
