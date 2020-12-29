import { Component, h, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'my-news',
  styleUrl: 'my-news.css'
})

export class MyNews {
  @Prop() newsList;

  fetchNews = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
    this.newsList = await response.json();
  }

  deleteNews = id => {
    this.newsList = this.newsList.filter(news => news.id !== id);
  }

  addNews = news => {
    this.newsList = [news, ...this.newsList]
  }

  viewNews = news => {
    this.newsList = [news]
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
        {this.newsList.map((news => 
          <my-news-page news={news}></my-news-page>
        ))}
      </div>
    )
  }
}
