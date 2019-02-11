import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ITextNote } from '../../../models/text-note';

@Component({
  selector: 'text-notes',
  templateUrl: './text-notes.component.html',
  styleUrls: ['./text-notes.component.scss']
})
export class TextNotesComponent implements OnInit {

  @ViewChild('listContainer') listContainer : ElementRef<any>;

  @Input() notes: Array<ITextNote>;
  @Input() set styleType(type) {
    this.renderer.removeAttribute(this.listContainer.nativeElement, 'class');
    if(type) {
      this.renderer.addClass(this.listContainer.nativeElement, type);
    }else {
      this.renderer.addClass(this.listContainer.nativeElement, 'list');
    }

  }
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
  }

  onSelect(note) {
    this.select.emit(note);
  }

}
