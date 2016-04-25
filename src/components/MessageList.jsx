import React from 'react';
import Message from './Message.jsx';

import mui from 'material-ui';

var {Card, List} = mui;

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
						<Message message={ message } />
				</div>
			);
		});

		return (
			<Card>
				<list>
					{messageNodes}
				</list>
			</Card>
			// <div>{messageNodes}</div>
		);
	}
}

export default MessageList;