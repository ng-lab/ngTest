import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  textForm: FormGroup;
  @Output() add: EventEmitter<any>  = new EventEmitter();

   constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.textForm = this.fb.group({
      description: ['']
    })
  }

  public onSubmit() {
    this.add.emit(this.textForm.value);
    this.textForm.reset();
  }

}
