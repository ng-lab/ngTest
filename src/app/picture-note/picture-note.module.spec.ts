import { PictureNoteModule } from './picture-note.module';

describe('PictureNoteModule', () => {
  let pictureNoteModule: PictureNoteModule;

  beforeEach(() => {
    pictureNoteModule = new PictureNoteModule();
  });

  it('should create an instance', () => {
    expect(pictureNoteModule).toBeTruthy();
  });
});
