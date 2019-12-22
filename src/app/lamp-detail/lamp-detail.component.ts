import { Component, OnInit, Input, Output } from '@angular/core';
import { Lamp } from '../lamp';
import { LampService } from '../lamp.service';

@Component({
  selector: 'app-lamp-detail',
  templateUrl: './lamp-detail.component.html',
  styleUrls: ['./lamp-detail.component.css']
})

export class LampDetailComponent implements OnInit {
  @Input()@Output() lamp: Lamp;

  constructor(
    private lampenService: LampService
  ) { }

  ngOnInit() {
  }
  getLamp(): void {
    this.lampenService.getLamp(this.lamp.id);
  }

}
