import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() changeType: EventEmitter<any> = new EventEmitter();
  @Output() newNote: EventEmitter<any> = new EventEmitter();
  @Input() type;

  constructor() { }

  ngOnInit() {
  }

  public onChangeType(type) {
    this.changeType.emit(type);
  }

  public addNewTask() {
    this.newNote.emit()
  }

}
