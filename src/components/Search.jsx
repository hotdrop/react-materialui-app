import React, { Component, PropTypes } from 'react';

import SearchBox from './SearchBox.jsx'
import SearchTable from './SearchTable.jsx'
import Regist from './Regist.jsx'

const sample = [
  {id:1, kana:"namae", kanji:"名前", variable:"name"},
  {id:2, kana:"jusho", kanji:"住所", variable:"address"}
]

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: sample, // master
    };

    this.addData = this.addData.bind(this);
  }

  addData(addData) {
    let _data = this.state.data;
    let _id = _data.length + 1;
    let _addData = {
      id: _id,
      kana: addData._kana,
      kanji: addData._kanji,
      variable: addData._variable
    };
    _data.push(_addData);
    this.setState({data: _data});
  }

  render() {
    return(
      <div>
        <SearchBox />
        <SearchTable data={this.state.data} />
        <Regist addData={this.addData} />
      </div>
    )
  }
}
export default Search;
