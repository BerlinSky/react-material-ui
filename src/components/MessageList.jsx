import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: [
				'Hi there, How silly is it?????',
				'I do not think so, do you???',
				'How do I know?'
			]
		};
	}

	render() {
		// debugger;

		var messageNodes = this.state.message.map((message) => {
			return (
				<div>
					<div style={{color: 'red'}}>
						<Message message={ message } />
					</div>
		      <h1>Hello, world.  No more new ideas, right??</h1>
				</div>
			);
		});

		return (
			<div>{messageNodes}</div>
		);
	}
}

export default MessageList;