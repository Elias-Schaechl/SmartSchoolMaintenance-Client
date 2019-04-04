import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-thing-detail',
  templateUrl: './thing-detail.component.html',
  styleUrls: ['./thing-detail.component.css']
})
export class ThingDetailComponent implements OnInit {

  private ip;
  private state = {
    'espMacAddress': '',
    'wifiName': '',
    'wifiStrength': 0,
    'freeHeap': 0,
    'Config': ''
    };
  private config = {
    'server': '',
    'port': '',
    'user': '',
    'password': '',
    'thingname': '',
    'isjsonencoded': '',
    'udploggerip': '',
    'udploggerport': ''
    };
  private configString = '';


  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ip = params['ip'];
    });
    this.dataService.getThingState(this.ip).subscribe(data => {

      data = data.replace('\\b\u0001', '');
      this.state = JSON.parse(data);
      this.config = JSON.parse(this.state.Config);
      this.configString = JSON.stringify(this.config, null, 1);
      console.log(this.ip);
      console.log(this.state);
      console.log(this.configString);
      // console.log(JSON.stringify(this.state));
      // console.log(JSON.stringify(this.config));
    });
  }

  restartThing() {
    this.dataService.restartThing(this.ip).subscribe(data => {
      console.log(JSON.stringify(data));
    });
    console.log(this.state);
  }

  resetThing() {
    return;
    this.dataService.resetThing(this.ip).subscribe(data => {
      console.log(JSON.stringify(data));
    });
    console.log(this.state);
  }

}
