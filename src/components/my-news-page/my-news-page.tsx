import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import { href } from 'stencil-router-v2';
import state from '../store/store';

@Component({
  tag: 'my-news-page',
  styleUrl: 'my-news-page.scss'
})

export class MyNewsPage {  
  @Prop() page: string;
  @Prop() news;

  @Event() newsDeleted: EventEmitter;

  deleteNewsHandler = id => {
    this.newsDeleted.emit(id);
  }

  componentWillRender() {
    this.news = state.newsList.find(news => news.id === +this.page);
  }

  render() {
    return (
      <section>
        <h3>{this.news.title}</h3>
        <p>{this.news.body}</p>
        <button class="btn btn--primary btn--medium btn--delete" onClick={() => this.deleteNewsHandler(this.news.id)}>Delete</button>
        <a {...href(`/news/${this.page}`)} class="btn btn--primary btn--medium btn--view">View</a>
      </section>
    )
  }
}
