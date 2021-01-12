import { newSpecPage } from '@stencil/core/testing';
import { MyNews } from './my-news';

describe('my-news', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyNews],
      html: '<my-news></my-news>',
    });
    expect(root).toBeTruthy();
  });
});
