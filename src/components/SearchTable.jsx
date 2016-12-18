import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class Todos extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <Table style={{width:500}}>
            <TableHeader displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn style={{width:"10%"}}>ID</TableHeaderColumn>
                <TableHeaderColumn style={{width:"30%"}}>Kana</TableHeaderColumn>
                <TableHeaderColumn style={{width:"30%"}}>kanji</TableHeaderColumn>
                <TableHeaderColumn style={{width:"30%"}}>variable</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.data.map(row =>
                <TableRow>
                  <TableRowColumn style={{width:"10%"}}>{row.id}</TableRowColumn>
                  <TableRowColumn style={{width:"30%"}}>{row.kana}</TableRowColumn>
                  <TableRowColumn style={{width:"30%"}}>{row.kanji}</TableRowColumn>
                  <TableRowColumn style={{width:"30%"}}>{row.variable}</TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </MuiThemeProvider>
      </div>
    )
  }
}
