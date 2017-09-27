/**
 * Created by zhengxiuming on 2017/9/26.
 */
import React, {Component} from 'react';
import styles from './Home.css';
import {connect} from 'dva';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        首页
      </div>
    )
  }
}

export default connect(({ home, loading }) => ({ home, loading }))(Home);
