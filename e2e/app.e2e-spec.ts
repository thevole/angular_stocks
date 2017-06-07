import { StocksPage } from './app.po';

describe('stocks App', () => {
  let page: StocksPage;

  beforeEach(() => {
    page = new StocksPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
