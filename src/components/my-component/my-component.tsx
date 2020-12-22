import { Component, Prop, h, State, Event, EventEmitter, Listen } from '@stencil/core';

export interface AcknowledgeEvent {
  when: Date;
}
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  scoped: true
})
export class MyComponent {
  @Prop() text: string = "Hello world!!";
  @Prop() kind: "info" | "success" | "error" = "info";
  @State() acknowledged: boolean = false;
  @Event() acknowledge: EventEmitter;
  
  @Listen("click")
  handleClick() {
    this.acknowledged = true;
    this.acknowledge.emit({
      when: new Date()
    });
  }

  getCSSClass = () => this.kind + (this.acknowledged ? " acknowledged" : "");

  render() {
    return (
      <p class={this.getCSSClass()}>
        {this.text}
        <span>Acknowledge</span>
      </p>
    )
  }
}
