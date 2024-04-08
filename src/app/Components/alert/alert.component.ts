import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent implements OnInit {
  model: any = {};
  title!: string;
  message!: string;
  actions: any[] = [];
  constructor(private dialogRef: MdbModalRef<AlertComponent>) {}

  ngOnInit(): void {}

  dismiss() {
    this.dialogRef.close();
  }

  click(action: any) {
    this.dismiss();
    if (action.handler) {
      action.handler();
    }
  }
}
