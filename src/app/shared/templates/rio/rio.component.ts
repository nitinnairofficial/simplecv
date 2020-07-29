import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rio',
  templateUrl: './rio.component.html',
  styleUrls: ['./rio.component.scss']
})
export class RioComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    this.data = {
      ...this.data.cvFormData,
      styleSettings: this.data.styleSettings,
    };
  }

}
