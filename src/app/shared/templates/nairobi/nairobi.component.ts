import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nairobi',
  templateUrl: './nairobi.component.html',
  styleUrls: ['./nairobi.component.scss'],
})
export class NairobiComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    this.data = {
      ...this.data.resumeData,
      resumeSettings: this.data.resumeSettings,
    };
  }
}
