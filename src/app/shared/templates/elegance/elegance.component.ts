import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-elegance',
  templateUrl: './elegance.component.html',
  styleUrls: ['./elegance.component.scss']
})
export class EleganceComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
