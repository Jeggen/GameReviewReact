import React from 'react';
import GamesFeed from './components/GamesFeed';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExampleIcon from './components/AppBar';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const feedUrl = "http://www.gameinformer.com/feeds/thefeedrss.aspx";

class App extends React.Component {
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName = "example"
           transitionAppear = {true} transitionAppearTimeout = {500}
           transitionEnter = {false} transitionLeave = {false}>

          <GamesFeed url ={feedUrl} />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}


export default App;
