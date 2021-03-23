import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Page from './Page2';
import { Nav00DataSource as ND} from './Header/data.source'
import { Footer10DataSource as FD } from './Footer/data.source.js';

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
          <Route exact path="/" component={Home} />
          <Route path="/abc" component={Page} />
          <Footer dataSource={FD} isMobile={this.state.isMobile} />
        </div>
      </Router>
    );
  }
}

export default App;