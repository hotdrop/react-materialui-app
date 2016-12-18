import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
  render() {
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
          <header>
            <AppBar title='react-materialui-app'/>
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Header;
