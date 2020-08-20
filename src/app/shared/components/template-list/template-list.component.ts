import { Component, OnInit, Optional, Inject } from '@angular/core';
import { DialogRef } from 'src/app/core/models/dialog-ref';
import { DIALOG_DATA } from 'src/app/core/services/dialog/dialog.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
})
export class TemplateListComponent implements OnInit {
  public templateList = [
    {
      templateName: 'tokyo',
      templateImage: 'assets/images/oslo.png',
    },
    {
      templateName: 'rio',
      templateImage: 'assets/images/oslo.png',
    },
    {
      templateName: 'berlin',
      templateImage: 'assets/images/oslo.png',
    },
    {
      templateName: 'denver',
      templateImage: 'assets/images/denver.png',
    },
    {
      templateName: 'nairobi',
      templateImage: 'assets/images/nairobi.png',
    },
    {
      templateName: 'oslo',
      templateImage: 'assets/images/oslo.png',
    },
    {
      templateName: 'stockholm',
      templateImage: 'assets/images/stockholm.png',
    },
    {
      templateName: 'helsinki',
      templateImage: 'assets/images/helsinki.png',
    },
  ];

  public selectedTemplateName = null;
  constructor(
    private dialogRef: DialogRef,
    @Optional() @Inject(DIALOG_DATA) public data: any = {}
  ) {}

  ngOnInit(): void {
    this.selectedTemplateName = this.data.templateName;
  }

  public selectedTemplate(templateName) {
    this.dialogRef.close(templateName);
  }
}
