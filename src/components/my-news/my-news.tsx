import { Component, h, Listen } from '@stencil/core';
import state from '../store/store';

@Component({
  tag: 'my-news',
  styleUrl: 'my-news.css'
})

export class MyNews {
  fetchNews = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
    state.newsList = await response.json();
  }

  deleteNews = id => {
    state.newsList = state.newsList.filter(news => news.id !== id);
  }

  addNews = news => {
    state.newsList = [news, ...state.newsList]
  }

  @Listen("newsAdded")
  newsAddedHandler(e: CustomEvent) {
    this.addNews(e.detail);
  }

  @Listen("newsDeleted")
  newsDeletedHandler(e: CustomEvent) {
    this.deleteNews(e.detail);
  }

  async componentWillLoad() {
    await this.fetchNews();
  }
  
  render() {
    return (
      <div>
        <my-add-news></my-add-news>
        {state.newsList.map((news => 
          <my-news-page page={news.id} />
        ))}
      </div>
    )
  }
}
