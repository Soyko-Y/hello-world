import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-home',
  styleUrl: 'my-home.css'
})

export class MyHome {
  render() {
    return (
      <div id="home">
        <my-navbar/>
        <my-router></my-router>
      </div>
    )
  }
}
