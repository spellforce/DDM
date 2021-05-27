import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Page from './Page2';
import YuYin from './YuYin';
import { Nav00DataSource as ND} from './Header/data.source'
import { Footer10DataSource as FD } from './Footer/data.source.js';
import { Skeleton } from 'antd';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header dataSource={ND} isMobile={this.state.isMobile} />
          <React.Suspense fallback={<Skeleton active />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/ys" component={Page} />
              <Route exact path="/yuyin" component={YuYin} />
              <Route exact path="/qyys" component={Page} />
            </Switch>
          </React.Suspense>
          <Footer dataSource={FD} isMobile={this.state.isMobile} />
        </div>
      </Router>
    );
  }
}

export default App;