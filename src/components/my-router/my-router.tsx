import { Component, Host, h } from '@stencil/core';
import { createRouter, Route, href, match } from 'stencil-router-v2';
 
const Router = createRouter();
 
@Component({
  tag: 'my-router',
})
export class MyRouter {
 
  render() {
    return (
      <Host>
        <Router.Switch>
 
          <Route path="/">
            <h1>Welcome</h1>
            <a {...href('/news')} class="my-link">News</a>
          </Route>
 
          <Route path={/^\/news/}>
            <my-news></my-news>
          </Route>
 
        </Router.Switch>
      </Host>
    );
  }
}