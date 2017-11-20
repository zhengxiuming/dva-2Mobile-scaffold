/**
 * Created by zhengxiuming on 2017/9/26.
 */
import React, {Component} from 'react';
import styles from './Home.css';
import {connect} from 'dva';
import Nav from '../../components/Common/Nav';
import Layout from '../../components/Common/Layout';
import {Carousel} from 'antd-mobile';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['', '', ''],
      initialHeight: 200,
    }
  }
  componentWillMount(){

  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        data:['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
      })
    },100)
  }
  render() {
    const hProp = this.state.initialHeight ? {height: this.state.initialHeight} : {};
    return (
      <Layout title="这是首页" bgBlack={true}>
        <Carousel className={styles.carousel}
                  autoplay={false}
                  infinite
                  selectedIndex={1}
                  swipeSpeed={35}
                  >

          {this.state.data.map(ii => (
            <a href="http://www.baidu.com" key={ii} style={hProp} className={styles.outer}>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii || 'QcWDkUhvYIVEcvtosxMF'}.png`}
                className={styles.imgStyle}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
      </Layout>
    )
  }
}

export default connect(({home, loading}) => ({home, loading}))(Home);
