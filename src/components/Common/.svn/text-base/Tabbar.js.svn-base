/**
 * Created by zhengxiuming on 2017/9/29.
 */
import React, {Component} from 'react';
import styles from './Tarbar.css';
import {Flex, WhiteSpace} from 'antd-mobile';

class TabBar extends Component {
  constructor() {
    super();
  }

  handleClick(e) {
    this.props.handleClick(e);
  }
  render() {
    const tabList = [
      {name: 'Home', path: 'images/tabbar_home.png',title:'首页'},
      {name: 'Category', path: 'images/tabbar_cate.png',title:'分类'},
      {name: 'ShopCart', path: 'images/tabbar_order.png',title:'购物车'},
      {name: 'PersonCenter', path: 'images/tabbar_my.png',title:'个人中心'}
    ];
    return (
      <div className={styles.container}>
        <Flex justify="center">
          {
            tabList.map((item, index)=> {
              const url = window.location.href;
              return (
                <Flex.Item className={url.indexOf(item.name)>0?`${styles.item} ${styles.hover}`:`${styles.item}`} key={index} onClick={()=> {
                  this.handleClick(item.name)
                }}>
                  <img src={item.path}/>
                  <div>{item.title}</div>
                </Flex.Item>
              )
            })
          }
        </Flex>
      </div>
    )
  }
}
export default TabBar
