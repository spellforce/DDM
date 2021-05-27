/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner1 from './Banner1';
import Content1 from './Content1';
import Point from './Point';
import {
  Banner10DataSource,
  Content10DataSource,
} from './data.source';
import './less/antMotionStyle.less';
import Production1 from '../components/Content/Production1';
import Picture from '../components/Content/Picture';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content1
        id="Content0_0"
        key="Content0_0"
        dataSource={Content10DataSource}
        isMobile={this.state.isMobile}
      />,
      <Production1
        id="xianshangyuyue"
        key="xianshangyuyue"
        dataSource={{
          title: '线上预约',
          data: [{
            imgUrl: '/images/youshi/pinpai.jpg',
            content: {
              title: '二星月嫂',
              subtitle: '全国连锁 放心选择',
              extra: (
                <div>
                  <span style={{ fontSize: 15, color: 'red' }}>￥6880</span>/起<span style={{ fontSize: 12 }}>（ 全国）</span>
                </div>
              )
            },
            button: '立即预约'
          },{
            imgUrl: '/images/youshi/pinpai.jpg',
            content: {
              title: '三星月嫂',
              subtitle: '全国连锁 放心选择',
              extra: (
                <div>
                  <span style={{ fontSize: 15, color: 'red' }}>￥8080</span>/起<span style={{ fontSize: 12 }}>（ 全国）</span>
                </div>
              )
            },
            button: '立即预约'            
          },
          {
            imgUrl: '/images/youshi/pinpai.jpg',
            content: {
              title: '四星月嫂',
              subtitle: '全国连锁 放心选择',
              extra: (
                <div>
                  <span style={{ fontSize: 15, color: 'red' }}>￥10080</span>/起<span style={{ fontSize: 12 }}>（ 全国）</span>
                </div>
              )
            },
            button: '立即预约'            
          },
          {
            imgUrl: '/images/youshi/pinpai.jpg',
            content: {
              title: '五星月嫂',
              subtitle: '全国连锁 放心选择',
              extra: (
                <div>
                  <span style={{ fontSize: 15, color: 'red' }}>￥12280</span>/起<span style={{ fontSize: 12 }}>（ 全国）</span>
                </div>
              )
            },
            button: '立即预约'            
          },
          {
            imgUrl: '/images/youshi/pinpai.jpg',
            content: {
              title: '金牌月嫂',
              subtitle: '全国连锁 放心选择',
              extra: (
                <div>
                  <span style={{ fontSize: 15, color: 'red' }}>￥14800</span>/起<span style={{ fontSize: 12 }}>（ 全国）</span>
                </div>
              )
            },
            button: '立即预约'            
          },
          {
            imgUrl: '/images/youshi/pinpai.jpg',
            content: {
              title: '中级育婴',
              subtitle: '全国连锁 放心选择',
              extra: (
                <div>
                  <span style={{ fontSize: 15, color: 'red' }}>￥4880</span>/起<span style={{ fontSize: 12 }}>（ 全国）</span>
                </div>
              )
            },
            button: '立即预约'            
          },
          {
            imgUrl: '/images/youshi/pinpai.jpg',
            content: {
              title: '高级育婴',
              subtitle: '全国连锁 放心选择',
              extra: (
                <div>
                  <span style={{ fontSize: 15, color: 'red' }}>￥5680</span>/起<span style={{ fontSize: 12 }}>（ 全国）</span>
                </div>
              )
            },
            button: '立即预约'            
          },
          {
            imgUrl: '/images/youshi/pinpai.jpg',
            content: {
              title: '3天-10天月嫂',
              subtitle: '全国连锁 放心选择',
              extra: (
                <div>
                  <span style={{ fontSize: 15, color: 'red' }}>￥400元起</span>/起<span style={{ fontSize: 12 }}>（ 全国）</span>
                </div>
              )
            },
            button: '立即预约'            
          }
        ]
        }}
        isMobile={this.state.isMobile}
      />,
      <Picture
        id="pic1"
        key="pic1"
        dataSource={{
          title: '服务流程',
          gutter: [24, 24],
          span: 4,
          width: 160,
          height: 160,
          content: [
            {
              imgUrl: '/images/fuwu/1.png',
            },
            {
              imgUrl: '/images/fuwu/2.png',
            },
            {
              imgUrl: '/images/fuwu/3.png',
            },
            {
              imgUrl: '/images/fuwu/4.png',
            },
            {
              imgUrl: '/images/fuwu/5.png',
            },
            {
              imgUrl: '/images/fuwu/6.png',
            }
          ]
        }}
        isMobile={this.state.isMobile}
      />,
      <Picture
        id="pic2"
        key="pic2"
        dataSource={{
          title: '我们的团队',
          gutter: [24, 80],
          span: 12,
          width: 380,
          height: 600,
          content: [
            {
              imgUrl: '/images/our/1.jpg',
            },
            {
              imgUrl: '/images/our/2.jpg',
            },
            {
              imgUrl: '/images/our/3.jpg',
            },
            {
              imgUrl: '/images/our/4.jpg',
            },
            {
              imgUrl: '/images/our/5.jpg',
            },
            {
              imgUrl: '/images/our/6.jpg',
            },
            {
              imgUrl: '/images/our/7.jpg',
            }
          ]
        }}
        isMobile={this.state.isMobile}
      />,
      <Point
        key="list"
        data={[
          'Banner1_0',
          'Content0_0',
          'xianshangyuyue',
          'pic1',
          'pic2',
        ]}
      />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
