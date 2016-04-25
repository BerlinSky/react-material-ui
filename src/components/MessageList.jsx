import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';

import Firebase from 'firebase';
import _ from 'lodash';

var {Card, List} = mui;

class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: []
		};

		this.firebaseRef = new Firebase('https://react-mui.firebaseio.com/messages');
		this.firebaseRef.on("value", (dataSnapshot) => {
			var messagesVal = dataSnapshot.val();
			var messages = _(messagesVal)
				.keys()
				.map((messageKey)=> {
					var cloned = _.clone(messagesVal[messageKey]);
					cloned.key = messageKey;
					return cloned;
				})
				.value();
				
			this.setState({
				messages: messages
			});
		});
	}

	render() {
		// debugger;

		var messageNodes = this.state.messages.map((message) => {
			return (
				<div>
						<Message message={ message.message } />
				</div>
			);
		});

		return (
			<Card style={{ 
				flexGrow: 2,
				marginLeft: 30
			}}>
				<list>
					{messageNodes}
				</list>
			</Card>
			// <div>{messageNodes}</div>
		);
	}
}

export default MessageList;