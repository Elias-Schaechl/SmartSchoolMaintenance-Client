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
  private thingname = '';
  private server = '';
  private port = '';
  private user = '';
  private password = '';
  private udploggerip = '';
  private udploggerport = '';


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
    this.dataService.resetThing(this.ip).subscribe(data => {
      console.log(JSON.stringify(data));
    });
    console.log(this.state);
  }


  changeThingname() {
    console.log(this.thingname);
    this.dataService.updateConfig(this.ip, 'thingname', this.thingname).subscribe(data => {
      console.log(data);
    });
  }

  changeServer() {
    console.log(this.server);
    this.dataService.updateConfig(this.ip, 'server', this.server).subscribe(data => {
      console.log(data);
    });
  }

  changePort() {
    console.log(this.port);
    this.dataService.updateConfig(this.ip, 'server', this.port).subscribe(data => {
      console.log(data);
    });
  }
  changeUser() {
    console.log(this.user);
    this.dataService.updateConfig(this.ip, 'server', this.user).subscribe(data => {
      console.log(data);
    });
  }
  changePassword() {
    console.log(this.password);
    this.dataService.updateConfig(this.ip, 'server', this.password).subscribe(data => {
      console.log(data);
    });
  }
  changeUDPLoggerIp() {
    console.log(this.udploggerip);
    this.dataService.updateConfig(this.ip, 'server', this.udploggerip).subscribe(data => {
      console.log(data);
    });
  }
  changeUDPLoggerPort() {
    console.log(this.udploggerport);
    this.dataService.updateConfig(this.ip, 'server', this.udploggerport).subscribe(data => {
      console.log(data);
    });
  }




}
