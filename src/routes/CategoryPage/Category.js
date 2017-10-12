/**
 * Created by zhengxiuming on 2017/9/30.
 */

import React, {Component} from 'react';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';
import Layout from '../../components/Common/Layout';


class Category extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Layout bgBlack={true} title="分类">
        <div>
          分类
        </div>
      </Layout>
    )
  }
}

export default connect(({category, loading})=>({category, loading}))(Category);
