import { CarFleetPage } from './app.po';

describe('car-fleet App', () => {
  let page: CarFleetPage;

  beforeEach(() => {
    page = new CarFleetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
