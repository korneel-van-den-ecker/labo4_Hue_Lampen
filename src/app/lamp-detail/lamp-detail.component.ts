import { Component, OnInit, Input } from '@angular/core';
import { Lamp, RGBLamp } from '../lamp';
import { LampService } from '../lamp.service';

@Component({
  selector: 'app-lamp-detail',
  templateUrl: './lamp-detail.component.html',
  styleUrls: ['./lamp-detail.component.css']
})

export class LampDetailComponent implements OnInit {
  @Input() rgbLamp: RGBLamp;

  constructor(
    private lampenService: LampService
  ) { }

  ngOnInit() {
  }
  getLamp(): void {
    this.lampenService.getLamp(this.rgbLamp.id);
  }

}
