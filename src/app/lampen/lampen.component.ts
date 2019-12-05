import { Component, OnInit } from '@angular/core';
import { Lamp } from '../lamp';
import { LampService } from '../lamp.service';

@Component({
  selector: 'app-lampen',
  templateUrl: './lampen.component.html',
  styleUrls: ['./lampen.component.css']
})
export class LampenComponent implements OnInit {
  lampen: Lamp[];
  config: any;

  constructor(private lampService: LampService) {
   }

  ngOnInit() {
    this.getLampen();
  }

  getLampen() {
    this.lampService.getLampen().subscribe(data => this.config = data);
    // this.construeerLampen();
  }

  /* construeerLampen(){
    for (let i = 1; i < this.config.length; i++) {
      const lamp = this.config[i];
      //let lampje: Lamp = {id : this.config[i]}

    }

    this.config.forEach(lamp => {
      let lampje:Lamp={ id = this.config. }
    });
  } */

}
