import React, { Component } from 'react';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			message: [
				'Hi there, How silly is it???????',
				'I do not think so, do you???',
				'How do I know?'
			]
		};
	}

  render() {
    // return (
    //   <h1>Hello, world.  No more new ideas, right??????</h1>
    // );

    var messageNodes = this.state.message.map((message) => {
			return (
				<div style={{color: 'red'}}>{message}</div>
			);
		});

		return (
			<div>{messageNodes}</div>
		);
  }
}
