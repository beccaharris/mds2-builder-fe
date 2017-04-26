import { Mds2BuilderFePage } from './app.po';

describe('mds2-builder-fe App', () => {
  let page: Mds2BuilderFePage;

  beforeEach(() => {
    page = new Mds2BuilderFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
