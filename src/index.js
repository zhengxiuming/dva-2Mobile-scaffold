import dva from 'dva';
import './index.css'
import createLoading from 'dva-loading';
import {Toast} from 'antd-mobile';

// 1. Initialize
const app = dva({
  onError (error) {
    Toast.info(error.message)
  },
});

// 2. Plugins
app.use(createLoading());

// 3.Model
app.model(require("./models/app"));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
