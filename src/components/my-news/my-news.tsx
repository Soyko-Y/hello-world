import { Component, h, State, Listen, Prop } from '@stencil/core';

export interface News {
  id: string;
  title: string;
  body: string;
}

@Component({
  tag: 'my-news',
  styleUrl: 'my-news.css'
})
export class MyNews {
  @Prop() newsList: Array<News> = [{id: '1', title: 'title', body: 'body'}, {id: '2', title: 'qwerty', body: 'asdfg'}];

  deleteNewsHandler = id => {
    this.newsList = this.newsList.filter(news => news.id !== id);
  }

  addNews = news => {
    this.newsList = [...this.newsList, news]
  }

  @Listen("newsAdded")
  newsAddedHandler(e: CustomEvent) {
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
