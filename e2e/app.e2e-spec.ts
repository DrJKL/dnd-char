import { DndCharPage } from './app.po';

describe('dnd-char App', function() {
  let page: DndCharPage;

  beforeEach(() => {
    page = new DndCharPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
