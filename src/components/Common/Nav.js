/**
 * Created by zhengxiuming on 2017/9/29.
 */
import React from 'react';
import styles from './Nav.css';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';

const Nav = ({title, bgBlack, dispatch, history}) => {
  const handleClick = () => {
    dispatch(routerRedux.goBack());
  };
  return (
    <div className={bgBlack ? styles.bg : styles.nav}>
      <div className={styles.left_btn} onClick={handleClick}/>
      {title}
    </div>
  )
};

export default connect(({nav, loading}) => ({nav, loading}))(Nav);

