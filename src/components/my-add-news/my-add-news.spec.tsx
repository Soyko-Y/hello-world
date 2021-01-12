import { newSpecPage } from '@stencil/core/testing';
import { MyAddNews } from './my-add-news';

describe('my-add-news', () => {
  let page;
  beforeEach( async () => {
    page = await newSpecPage({
      components: [MyAddNews],
      html: '<my-add-news title="title" body="body"></my-add-news>',
    });
  });
  
  it('renders', async () => {
    expect(page.root).toMatchSnapshot();
  });
});
