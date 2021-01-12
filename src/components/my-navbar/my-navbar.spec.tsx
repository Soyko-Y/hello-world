import { newSpecPage } from '@stencil/core/testing';
import { MyNavbar } from './my-navbar';
import { createRouter } from 'stencil-router-v2';

describe('my-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyNavbar],
      html: '<div></div>',
    });
    const Router = createRouter();
    let cmp = page.doc.createElement('my-navbar');
    page.root.appendChild(cmp);
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });
});
