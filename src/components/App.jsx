import React from 'react';
import MessageList from './MessageList.jsx';

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
				<MessageList />
				<RaisedButton label="More Info" primary={true} />
			</div>
		);
	}
}

export default App;
