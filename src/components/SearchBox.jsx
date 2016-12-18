import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import TextField from 'material-ui/TextField';

export default class SearchBox extends Component {
  render() {
    return(
      <div>
        <MuiThemeProvider>
          <TextField hintText="Search Word" />
        </MuiThemeProvider>
      </div>
    )
  }
}
