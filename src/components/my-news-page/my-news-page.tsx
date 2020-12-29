import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-news-page',
  styleUrl: 'my-news-page.css'
})

export class MyNewsPage {  
  @Prop() news;

  @Event() newsDeleted: EventEmitter;

  deleteNewsHandler = id => {
    this.newsDeleted.emit(id);
  }

  render() {
    return (
      <div>
        <section>
          <h3>{this.news.title}</h3>
          <p>{this.news.body}</p>
          <button onClick={() => this.deleteNewsHandler(this.news.id)}>Delete</button>
        </section>
      </div>
    )
  }
}
