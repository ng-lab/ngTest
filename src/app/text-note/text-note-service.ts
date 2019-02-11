import { Injectable } from '@angular/core';
import { ITextNote } from '../models/text-note';
import { of, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextNoteService {

  notes: Array<ITextNote> = [];

  private FETCH_NOTES = new Subject();
  public fetch_notes$ = this.FETCH_NOTES.asObservable();

  constructor() { }

  createNote(note: ITextNote) {
    this.notes = [...this.notes, note];
    this.FETCH_NOTES.next(this.notes);

  }

  fetchNotes(): Observable<any> {
    return this.fetch_notes$
  }
}
