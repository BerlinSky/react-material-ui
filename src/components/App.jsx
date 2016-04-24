import React from 'react';
import MessageList from './MessageList.jsx';

class App extends React.Component {
	constructor() {
		super();
		// this.state = {
		// 	message: [
		// 		'Hi there, How silly is it?????',
		// 		'I do not think so, do you???',
		// 		'How do I know?'
		// 	]
		// };
	}

	render() {
		return (
			<div><MessageList /></div>
		);
	}
}

export default App;
