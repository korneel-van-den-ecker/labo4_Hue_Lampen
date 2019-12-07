import { Component, OnInit } from '@angular/core';
import { Lamp } from '../lamp';
import { LampService } from '../lamp.service';
// import { LAMPEN } from '../mock-lampen';

@Component({
  selector: 'app-lampen',
  templateUrl: './lampen.component.html',
  styleUrls: ['./lampen.component.css']
})
export class LampenComponent implements OnInit {
  lampen: Lamp[] = [];
  config: any;

  constructor(private lampService: LampService) {
   }

  ngOnInit() {
    this.getLampen();
  }

  getLampen() {
    this.lampService.getLampen().subscribe( data => this.construeerLampen(data) );
  }

  construeerLampen(data: object) {
    console.log(data);
    for (let i = 1; i <=  Object.keys(data).length + 1; i++) {
       const lampje: Lamp = {id : i, on : data[i].state.on, xy : data[i].state.xy, sterkte : data[i].state.bri};
       this.lampen.push(lampje);

      // const lampje: Lamp = {id : lamp.state.id, xy : lamp.state.xy, on : lamp.state.on, sterkte: lamp.state.bri};
      // this.lampen.push(lampje);
    }
  }

}
