import { NomExemplePage } from './app.po';

describe('nom-exemple App', function() {
  let page: NomExemplePage;

  beforeEach(() => {
    page = new NomExemplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
