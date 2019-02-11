import { TextNoteModule } from './text-note.module';

describe('TextNoteModule', () => {
  let textNoteModule: TextNoteModule;

  beforeEach(() => {
    textNoteModule = new TextNoteModule();
  });

  it('should create an instance', () => {
    expect(textNoteModule).toBeTruthy();
  });
});
