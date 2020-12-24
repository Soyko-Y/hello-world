import { Component, h, State, Listen, Prop } from '@stencil/core';

import { News } from '../my-add-news/my-add-news'

@Component({
  tag: 'my-news',
  styleUrl: 'my-news.css'
})
export class MyNews {
  @State() newsList: Array<News> = [{id: '1', title: 'title', body: 'body'}, {id: '2', title: 'qwerty', body: 'asdfg'}];
  // @Prop({mutable: true}) news: News;

  deleteNewsHandler = id => {
    this.newsList = this.newsList.filter(news => news.id !== id);
  }

  addNews = news => {
    console.log("news");
    console.log(news);
    // this.newsList.unshift(news);
    this.newsList = [...this.newsList, news]
    console.log(this.newsList);
  }

  @Listen("newsAdded")
  newsAddedHandler(e: CustomEvent<News>) {
    // console.log(e.detail);
    // console.log(this.news);
    // this.news.id = e.detail.id;
    // this.news.title = e.detail.title;
    // this.news.body = e.detail.body;
    // console.log(e.detail.id);
    // const news = e.detail
    this.addNews(e.detail);
  }
  
  render() {
    return (
      <div>
        <my-add-news></my-add-news>
        {this.newsList.map((news => 
          <section>
            <h3>{news.title}</h3>
            <p>{news.body}</p>
            <button onClick={() => this.deleteNewsHandler(news.id)}>Delete</button>
          </section>
        ))}
      </div>
    )
  }
}
