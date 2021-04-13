import React, { Component } from 'react';

class TOC extends Component {
  // TOC 데이터 값이 달라진 때 render 호출 되도록 설정
  // concat 사용 시에만 정상 작동
  // push 사용 시 원본 데이터가 수정되기 때문에 정상 작동 X
  shouldComponentUpdate(newProps, newState) {
    if (this.props.data === newProps.data) {
      // not calling render()
      return false;
    }
    // calling render()
    return true;
  }

  render() {
    // console.log('TOC render');

    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>);
      i = i + 1;
    }

    return (
      <nav>
        <ul>
          {lists}
          {/* <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.html">CSS</a>
          </li>
          <li>
            <a href="3.html">JavaScript</a>
          </li> */}
        </ul>
      </nav>
    );
  }
}

export default TOC;