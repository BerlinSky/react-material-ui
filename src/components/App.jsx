import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';

import ThemeManager from 'material-ui/lib/styles/theme-manager';

import MyRawTheme from '../app-mui-theme.js';

class App extends React.Component {
	constructor() {
		super();
	}

	static childContextTypes = {
	  muiTheme: React.PropTypes.object
	}

	 getChildContext() {
	  return {
	    muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
	  };
	}

	render() {
		return (
			<div>
				<AppBar title="React Meets Material UI" />
				<div style={{
					display: 'flex',
					flexFlow: 'row wrap',
					maxWidth: 1200,
					width: '100%',
					margin: '30px auto 30px'
				}}>
					<ChannelList />
					<MessageList />
				</div>
				<MessageBox />
				<RaisedButton label="More Info" primary={true} />
			</div>
		);
	}
}

export default App;
