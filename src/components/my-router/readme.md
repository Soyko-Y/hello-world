# my-router



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [my-home](../my-home)

### Depends on

- [my-news](../my-news)
- [my-news-page](../my-news-page)

### Graph
```mermaid
graph TD;
  my-router --> my-news
  my-router --> my-news-page
  my-news --> my-add-news
  my-news --> my-news-page
  my-home --> my-router
  style my-router fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
