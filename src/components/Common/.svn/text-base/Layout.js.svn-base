/**
 * Created by zhengxiuming on 2017/9/29.
 */

import React, {Component} from 'react';
import styles from './Layout.css';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import Nav from './Nav';
import TabBar from './Tabbar';

class Layout extends Component {
  constructor(){
    super();
  }
  handleClick(e){
    const url = window.location.href;
    //防止再次点击触发跳转本页，报错。
    if(url.indexOf(e)>0){
      return;
    }
    this.props.dispatch(routerRedux.push({
      pathname:'/'+e
    }))
  }
  render() {
    return (
      <div className={styles.container}>
        <Nav title={this.props.title} bgBlack={this.props.bgBlack}/>
        {this.props.children}
        <TabBar handleClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}
export default connect(({layout, loading})=>({layout, loading}))(Layout);
