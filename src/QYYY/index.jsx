/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Banner1 from './Banner1';
import Point from './Point';
import {
  Banner10DataSource,
} from './data.source';
import './less/antMotionStyle.less';
import Production1 from '../components/Content/Production1';
import Text from '../components/Content/Text';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

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
      (
        <Typography style={{ padding: 100,paddingLeft: 200}}>
          <Title level={2}>认识体系打造</Title>
          <Paragraph style={{fontSize:14}}>
            <ul>
              <li>预设组织架构图</li>
              <li>协助组织架构的搭建</li>
              <li>协助各部门岗位职责的预设</li>
              <li>人事筛选标准、人事面试流程</li>
              <li>培训及协助人事招聘岗组建团队的能力</li>
              <li>薪酬体系</li>
              <li>员工福利、股份体系、分红体系、晋升通道规划</li>
              <li>新人入职3-7天及三个月育成使其形成系统化</li>
            </ul>
          </Paragraph>
          <Title level={2}>家政体系打造</Title>
          <Paragraph style={{fontSize:14}}>
            <ul>
	<li>制定家政服务流程</li>
	<li>制定家政服务报价</li>
	<li>制定家政服务内容及特色</li>
	<li>制定阿姨评星标准</li>
	<li>制定阿姨档案管理标准</li>
	<li>制定阿姨上户服务手册及企业服务手册</li>
            </ul>
          </Paragraph>
          <Title level={2}>产品体系搭建</Title>
          <Paragraph style={{fontSize:14}}>
            <ul>
            <li>制定收费标准</li>
	<li>制定收费产品优势</li>
	<li>制定尖刀产品 拳头产品 利润产品</li>
	<li>制定产品价格体系</li>
	<li>四、协助室内VI打造</li>
	<li>规划职场及职能区域</li>
	<li>提供物料采购清单</li>
	<li>室内框画文案制定</li>
            </ul>
          </Paragraph>
          <Title level={2}>线下扶持</Title>
          <Paragraph style={{fontSize:14}}>
            <ul>
            <li>活动的策划</li>
	<li>专场培训</li>
	<li>问题摸底</li>
            </ul>
          </Paragraph>
          <Title level={2}>多对一+会议跟进</Title>
          <Paragraph style={{fontSize:14}}>
            <ul>
            <li>视频</li>
	<li>月度规划</li>
	<li>早会规划</li>
	<li>周会规划</li>
	<li>提出改善方案</li>
            </ul>
          </Paragraph>
          <Title level={2}>全套营销体系</Title>
          <Paragraph style={{fontSize:14}}>
            <ul>
            <li>玩转微信（3课时）</li>
	<li>营销技巧（8课时）</li>
	<li>引流十全十美（3课时）</li>
            </ul>
          </Paragraph>
        </Typography>
      )
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
