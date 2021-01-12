import { newSpecPage } from '@stencil/core/testing';
import { MyHome } from './my-home';

describe('my-home', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyHome],
      html: '<my-home></my-home>',
    });
    expect(root).toBeTruthy();
  });
});
