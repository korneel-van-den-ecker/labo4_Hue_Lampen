import { Component, OnInit } from '@angular/core';
import { Lamp } from '../lamp';

@Component({
  selector: 'app-lampen',
  templateUrl: './lampen.component.html',
  styleUrls: ['./lampen.component.css']
})
export class LampenComponent implements OnInit {
  lampen: Lamp[];
  constructor() {
    this.lampen
    ]
   }

  ngOnInit() {
  }

}
