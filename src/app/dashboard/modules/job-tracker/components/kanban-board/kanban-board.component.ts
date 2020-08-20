import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { JobDetailsComponent } from '../job-details/job-details.component';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss'],
})
export class KanbanBoardComponent implements OnInit {
  public appliedList = [
    {
      companyName: 'Twitter',
      jobTitle: 'UI Designer',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      currentStatus: 'Applied',
      createdDate: '',
      jobLocation: 'New York',
      jobLink: 'https://www.hello.com',
      additionalNote: 'Lorem ipsum dolor sit amet.',
    },
    {
      companyName: 'Twitter',
      jobTitle: 'UI Designer',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      currentStatus: 'Applied',
      createdDate: '',
      jobLocation: 'New York',
      jobLink: 'https://www.hello.com',
      additionalNote: 'Lorem ipsum dolor sit amet.',
    },
  ];
  public interviewList = [
    {
      companyName: 'Google',
      jobTitle: 'Web Designer',
      jobDescription: '',
      currentStatus: '',
      createdDate: '',
      jobLocation: '',
      jobLink: '',
      additionalNote: '',
    },
  ];
  public offerList = [
    {
      companyName: 'Facebook',
      jobTitle: 'Webflow Designer',
      jobDescription: '',
      currentStatus: '',
      createdDate: '',
      jobLocation: '',
      jobLink: '',
      additionalNote: '',
    },
  ];
  public rejectedList = [
    {
      companyName: 'LinkedIn',
      jobTitle: 'UX Designer',
      jobDescription: '',
      currentStatus: '',
      createdDate: '',
      jobLocation: '',
      jobLink: '',
      additionalNote: '',
    },
  ];

  constructor(
    private dragulaService: DragulaService,
    private dialogService: DialogService
  ) {
    this.dragulaService
      .dropModel('KANBAN')
      .subscribe(({ source, target, sourceIndex, targetIndex }) => {
        const sendData = {
          sourceIndex,
          sourceGroup: source.id,
          targetIndex,
          targetGroup: target.id,
        };
        console.log(sendData);
      });
  }

  ngOnInit(): void {}

  public openJobDetailDialog(data?: any) {
    this.dialogService.open(JobDetailsComponent, {
      data,
    });
  }

  public deleteJob() {
    
  }
}
