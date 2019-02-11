import { DocumentNoteModule } from './document-note.module';

describe('DocumentNoteModule', () => {
  let documentNoteModule: DocumentNoteModule;

  beforeEach(() => {
    documentNoteModule = new DocumentNoteModule();
  });

  it('should create an instance', () => {
    expect(documentNoteModule).toBeTruthy();
  });
});
