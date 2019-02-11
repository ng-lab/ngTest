import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ITextNote } from '../../../models/text-note';
import { TextNoteService } from '../../text-note-service';
import { Router } from '@angular/router';
@Component({
  selector: 'staging',
  templateUrl: './staging.component.html',
  styleUrls: ['./staging.component.scss']
})
export class StagingComponent implements OnInit {


  notes: Array<ITextNote> = [];
  note: ITextNote;
  selectedNote: ITextNote;
  styleType:any;
  newNote: boolean = false;

  constructor(
    private fb: FormBuilder,
    private TextNoteService: TextNoteService,
    private router: Router
  ) { }

  ngOnInit() {

    this.TextNoteService.fetchNotes().subscribe(res => {
      this.notes = res;
    })
  }



  public onNoteAdd(note) {
    this.TextNoteService.createNote(note);
  }

  public onSelect(note) {
    this.selectedNote = note;
    this.newNote = false;
//     this.router.navigate( ['text-note', { outlets: { detail: null } } ]);
//     // this.router.navigate( [ '' , { outlets: {detail: ['test'] } }]);
// this.router.navigate( ['text-note', { outlets: { detail: [`${note.description}`] } } ]);
  }

  onChangeType(type) {
    this.styleType = type;
  }

  onNewNote(event) {
    this.newNote = true;
  }




}
