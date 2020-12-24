import { Component, h, State, Event, EventEmitter } from '@stencil/core';

export interface News {
  id: string;
  title: string;
  body: string;
}

@Component({
  tag: 'my-add-news',
  styleUrl: 'my-add-news.css'
})
export class MyAddNews {
  @State() news: News;
  
  @Event() newsAdded: EventEmitter<News>;

  newsAddedHandler(e) {
    e.preventDefault()
    this.news.id = Date.now().toString();
    this.newsAdded.emit(this.news)
    // this.news.title = this.news.body = "";
  }

  handleChangeTitle(event) {
    this.news.title = event.target.value;
  }

  handleChangeBody(event) {
    this.news.body = event.target.value;
  }
  
  componentWillLoad() {
    this.news = {id: "", title: "", body: ""};
  }

  componentDidRender() {
    
  }

  render() {
    return (
      <form onSubmit={(e) => this.newsAddedHandler(e)}>
      <label>
        Title:
        <input type="text" value={this.news.title} onInput={(event) => this.handleChangeTitle(event)} />
      </label>
      <label>
        Content:
        <input type="text" value={this.news.body} onInput={(event) => this.handleChangeBody(event)} />
      </label>
      <button type="submit">Submit</button>
    </form>
    )
  }
}
