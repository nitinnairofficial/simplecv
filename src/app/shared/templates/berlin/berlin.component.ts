import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-berlin',
  templateUrl: './berlin.component.html',
  styleUrls: ['./berlin.component.scss'],
})
export class BerlinComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    this.data = {
      ...this.data.resumeData,
      resumeSettings: this.data.resumeSettings,
    };
  }
}
