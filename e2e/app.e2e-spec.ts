import { SrijanTestPage } from './app.po';

describe('srijan-test App', () => {
  let page: SrijanTestPage;

  beforeEach(() => {
    page = new SrijanTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
