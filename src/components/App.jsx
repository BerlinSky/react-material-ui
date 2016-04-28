import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';

import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../app-mui-theme.js';

import connectToStores from 'alt-utils/lib/connectToStores';

import ChatStore from '../stores/ChatStore';

@connectToStores
class App extends React.Component {
	constructor() {
		super();
	}

	static getStores() {
		return [ChatStore];
	}

	static getPropsFromStores() {
		return ChatStore.getState();
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
		var view = <Login />;

		if (this.props.user) {
			view = (
				<div>
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

		return (
			<div>
				<AppBar title="React Meets Material UI" />
				{ view }
			</div>
		);
	}
}

export default App;
