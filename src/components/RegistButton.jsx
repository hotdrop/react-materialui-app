import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class RegistButton extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAdd = this.handleAdd.bind(this);

    this._handleChangeKana = this._handleChangeKana.bind(this);
    this._handleChangeKanji = this._handleChangeKanji.bind(this);
    this._handleChangeVariable = this._handleChangeVariable.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  handleAdd() {
    this.props.handleSubmit();
    this.setState({open: false});
  };

  _handleChangeKana(e) {
    this.props.onChangeKana(e.target.value);
    this.isNotEmptyAll();
  }

  _handleChangeKanji(e) {
    this.props.onChangeKanji(e.target.value);
  }

  _handleChangeVariable(e) {
    this.props.onChangeVariable(e.target.value);
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        onClick={this.handleAdd}
        />,
      <FlatButton
        label="Close"
        secondary={true}
        onClick={this.handleClose}
        />,
    ];
    return(
      <div style={{paddingTop:"5px"}}>
        <RaisedButton label="REGIST" secondary={true} onClick={this.handleOpen}/>
        <Dialog
          title="Regsit Form"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          style={{width:500}}
        >
          Please input New Variable...<br></br>
          <TextField hintText="Kana" onChange={this._handleChangeKana} errorText="This field is required"/><br/>
          <TextField hintText="Kanji" onChange={this._handleChangeKanji} errorText="This field is required"/><br/>
          <TextField hintText="Variable" onChange={this._handleChangeVariable} errorText="This field is required"/><br/>
        </Dialog>
      </div>
    );
  }
}

RegistButton.propTypes = {
  onChangeKana: React.PropTypes.func,
  onChangeKanji: React.PropTypes.func,
  onChangeVariable: React.PropTypes.func,
  handleSubmit: React.PropTypes.func
}
