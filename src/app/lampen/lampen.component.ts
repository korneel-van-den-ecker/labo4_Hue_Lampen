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
  geselecteerdeLamp: Lamp;

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
    for (let i = 1; i <=  Object.keys(data).length; i++) {
       const lampje: Lamp = {id : i, on : data[i].state.on, xy : data[i].state.xy, sterkte : data[i].state.bri};
       this.lampen.push(lampje);
    }
  }

  onSelect(lamp: Lamp): void {
    this.geselecteerdeLamp = lamp;
  }

  update(): void {
    this.lampService.putLamp(this.geselecteerdeLamp);
  }

}
