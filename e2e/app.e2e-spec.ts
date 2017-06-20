import { SiesFrontPage } from './app.po';

describe('sies-front App', () => {
  let page: SiesFrontPage;

  beforeEach(() => {
    page = new SiesFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
