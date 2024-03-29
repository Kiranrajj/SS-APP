import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-grid',
  templateUrl: './mat-grid.component.html',
  styleUrl: './mat-grid.component.scss',
})
export class MatGridComponent {
  @Input() data: any;
  @Input() tableConfig: any;
  @Input() emptyRowMessage: any;
  @Output() rowClicked: any = new EventEmitter();
  @Output() rowDoubleClicked: any = new EventEmitter();
  row_id: any;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  typeof(variable: any) {
    return typeof variable;
  }

  present(obj: any, key: any) {
    return Object.keys(obj).includes(key);
  }

  emitDoubleClickEvent(data: any) {
    this.rowDoubleClicked.emit(data);
  }

  emitClickEvent(data: any) {
    this.rowClicked.emit(data);
  }
}
