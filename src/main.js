import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './components/App.jsx';

require('./main.scss');

class Main extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React Today????</p>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('container'));
