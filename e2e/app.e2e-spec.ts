import { AngularTourOfHeroesTempPage } from './app.po';

describe('angular-tour-of-heroes-temp App', function() {
  let page: AngularTourOfHeroesTempPage;

  beforeEach(() => {
    page = new AngularTourOfHeroesTempPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
