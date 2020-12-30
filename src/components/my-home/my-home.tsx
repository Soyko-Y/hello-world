import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-home',
  styleUrl: 'my-home.css'
})

export class MyHome {
  render() {
    return (
      <div id="home">
        <h1>Welcome to my amazing StencilJS app!</h1>
        <my-navbar/>
        <my-router></my-router>
      </div>
    )
  }
}
