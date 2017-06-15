import { PhotonWebPage } from './app.po';

describe('photon-web App', () => {
  let page: PhotonWebPage;

  beforeEach(() => {
    page = new PhotonWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
