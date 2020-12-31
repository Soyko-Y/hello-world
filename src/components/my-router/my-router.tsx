import { Component, Host, h } from '@stencil/core';
import { createRouter, Route, match } from 'stencil-router-v2';

const Router = createRouter();

@Component({
  tag: 'my-router',
})
export class MyRouter {

  render() {
    return (
      <Host>
        <Router.Switch>
          <Route path="/" to ="/stencil"/>

          <Route path="/stencil">
            <my-news></my-news>
          </Route>

          <Route 
            path={match('/news/:page')}
            render={({page}) => <my-news-page page={page}/>}>
          </Route>
        </Router.Switch>
      </Host>
    );
  }
}