import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-helsinki',
  templateUrl: './helsinki.component.html',
  styleUrls: ['./helsinki.component.scss']
})
export class HelsinkiComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
