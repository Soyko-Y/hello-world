import { Component, h } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'my-navbar',
  styleUrl: 'my-navbar.css'
})

export class MyNavbar {
  render() {
    return (
      <nav>
        <button {...href('/stencil')} class="btn btn--primary btn--medium btn--view">Home</button>
      </nav>
    )
  }
}
