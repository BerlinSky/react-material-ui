import React from 'react';

import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			// <div>{ this.props.message }</div>
			<ListItem
				leftAvatar={<Avatar src="http://image005.flaticon.com/1/png/128/123/123415.png" />}
			>
				{ this.props.message }
			</ListItem>
		);
	}
}

export default Message;
