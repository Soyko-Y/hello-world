import { Component, h, State, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'my-add-news',
  styleUrl: 'my-add-news.css'
})
export class MyAddNews {
  @Prop() title: string;
  @Prop() body: string;
  
  @Event() newsAdded: EventEmitter;

  newsAddedHandler(e) {
    e.preventDefault()
    const news = {
      id: Date.now().toString(),
      title: this.title,
      body: this.body
    };
    this.newsAdded.emit(news);
    this.title = this.body = "";
  }

  handleChangeTitle(event) {
    this.title = event.target.value;
  }

  handleChangeBody(event) {
    this.body = event.target.value;
  }

  render() {
    return (
      <section>
        <form onSubmit={(e) => this.newsAddedHandler(e)}>
          <label>
            Title:
            <input type="text" value={this.title} onInput={(event) => this.handleChangeTitle(event)} />
          </label>
          <label>
            Content:
            <input type="text" value={this.body} onInput={(event) => this.handleChangeBody(event)} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    )
  }
}
