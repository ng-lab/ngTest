import { ArticleNoteModule } from './article-note.module';

describe('ArticleNoteModule', () => {
  let articleNoteModule: ArticleNoteModule;

  beforeEach(() => {
    articleNoteModule = new ArticleNoteModule();
  });

  it('should create an instance', () => {
    expect(articleNoteModule).toBeTruthy();
  });
});
