import { Subject } from 'rxjs';

export class DialogRef {
  private readonly $afterClosed = new Subject<any>();
  public afterClosed = this.$afterClosed.asObservable();

  constructor() {}

  close(result?: any) {
    this.$afterClosed.next(result);
  }
} 
