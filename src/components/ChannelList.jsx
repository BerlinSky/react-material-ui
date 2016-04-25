import React from 'react';
import Channel from './Channel.jsx';

import mui from 'material-ui';

var {Card, List} = mui;

class ChannelList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			channels: [
				'Dogs',
				'Cats',
				'Tigers'
			]
		};
	}

	render() {
		// debugger;

		var channelNodes = this.state.channels.map((channel) => {
			return (
				<div>
						<Channel channel={ channel } />
				</div>
			);
		});

		return (
			<Card style={{ 
				flexGrow: 1
			}}>
				<list>
					{channelNodes}
				</list>
			</Card>
		);
	}
}

export default ChannelList;