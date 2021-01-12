import { newSpecPage } from '@stencil/core/testing';
import { createRouter } from 'stencil-router-v2';
import { MyNewsPage } from './my-news-page';
import state from '../store/store';

state.newsList = [
  { id: 1, title: 'title1', body: 'content1' },
  { id: 2, title: 'title2', body: 'content2' },
  { id: 3, title: 'title3', body: 'content3' }
];

const ID = '1';

describe('my-news-page', () => {
  it('should display items', () => {
    let page = new MyNewsPage();
    page.news = state.newsList;
    expect(page.news.length).toEqual(3);
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyNewsPage],
      html: '<div></div>'
    });
    const Router = createRouter();
    let cmp = page.doc.createElement('my-news-page');
    cmp.page = ID;
    cmp.news = state.newsList.find(news => news.id === +cmp.page);
    page.root.appendChild(cmp);

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it('should click button', async () => {
    const page = await newSpecPage({
      components: [MyNewsPage],
      html: '<my-news-page news=state.newsList page=1></my-news-page>'
    });
    let buttonSpy = jest.fn();
    page.doc.addEventListener('newsDeleted', buttonSpy);
    const button = page.root.querySelector('button');
    button.click();
    await page.waitForChanges();
    expect(buttonSpy).toHaveBeenCalled();
    expect(buttonSpy.mock.calls[0][0].detail).toEqual(1)
  })
});
