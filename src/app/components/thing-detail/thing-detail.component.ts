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
  private state;

  constructor(private route: ActivatedRoute, private dataService: DataServiceService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ip = params['ip'];
    });
    this.dataService.getThingState(this.ip).subscribe(data =>{
      console.log(JSON.stringify(data));
    });
    //console.log(JSON.parse(this.state));
    //console.log(this.ip);
  }

  resetThing() {
    this.dataService.resetThing(this.ip).subscribe(data =>{
      console.log(JSON.stringify(data));
    });
    console.log(this.state);
  }

}
