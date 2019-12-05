import { Component, OnInit } from '@angular/core';
import { LampService } from '../lamp.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})

export class ConfigComponent implements OnInit {
  private config: any;
  constructor(private lampService: LampService ) { }

  ngOnInit() {
  }

  onClick(): void{
    this.lampService.getLampen().subscribe(data => this.config = data);
  }

}
