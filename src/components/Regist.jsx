import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import RegistButton from './RegistButton.jsx';

export default class Regist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _kana: "",
      _kanji: "",
      _variable: "",
    }

    this.handleChangeKana = this.handleChangeKana.bind(this);
    this.handleChangeKanji = this.handleChangeKanji.bind(this);
    this.handleChangeVariable = this.handleChangeVariable.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeKana(val) {
    if ( val.trim() ) {
      this.setState({_kana: val});
    }
  }

  handleChangeKanji(val) {
    if ( val.trim() ) {
      this.setState({_kanji: val});
    }
  }

  handleChangeVariable(val) {
    if ( val.trim() ) {
      this.setState({_variable: val});
    }
  }

  handleSubmit() {
    this.props.addData(this.state);
    this.setState({
      _kana: "",
      _kanji: "",
      _variable: "",
    });
  }

  render() {
    return(
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <RegistButton
            onChangeKana={this.handleChangeKana}
            onChangeKanji={this.handleChangeKanji}
            onChangeVariable={this.handleChangeVariable}
            handleSubmit={this.handleSubmit}
          />
        </MuiThemeProvider>
      </div>
    )
  }
}

Regist.propTypes = {
  addData: React.PropTypes.func
}
