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
import { Tabs } from 'antd';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

const data1 = ["洗头洗脸洗屁股","宝宝洗澡","五官护理","宝宝穿脱衣服","宝宝换尿布","宝宝抚触","宝宝被动操","主被动操","三浴锻炼","宝宝游泳","宝宝喂药","冲调奶粉","给宝宝喂配方奶","宝宝拍嗝","宝宝衣物清洗","宝宝食具奶具消毒","宝宝包裹",
"婴幼儿出行物品", "物品玩具用具消毒","婴幼儿常见疾病护理","宝宝肠绞痛护理","湿疹护理","营养性疾病预防护理","宝宝大小便观察","宝宝便秘护理",
"婴幼儿睡眠排便护理","婴幼儿喂养","辅食添加","婴幼儿生活制度培养","预防接种","窒息急救处理","烫伤预防与护理","皮下血肿预防护理",
"大动作训练","精细动作训练","听说语言训练","指导认知训练","指甲护理技巧"];

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
      <Text 
        id="text1"
        dataSource={{
          title:"育婴师必学的38项必备技能",
          gutter: [24, 24],
          span: 4,
          color: ["#108ee9","#87d068"],
          content: data1,
        }}
      />,
      <div style={{ padding:"64px 104px"}} id="yys">
        <div className="title-wrapper">
          <h1 className="title">育婴师服务内容</h1>
        </div>  
        <Tabs defaultActiveKey="1" centered type="card">
          <Tabs.TabPane tab="2-12个月宝宝" key="1">
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="日常保健" key="1">
                <Text
                  dataSource={{
                    gutter: [24, 12],
                    span: 8,
                    color: ["#ef7d3a"],
                    content: ["按时计划免疫","常见疾病预防及护理 ","每日安全看护 ","每日出汗观察与处理 ","危险因素识别及安全隐患排除 ","意外伤害预防及急救 ","坚持户外活动/多晒太阳/多运动 ","小儿推拿 ","常备药品及护理用品清单提供"],
                  }}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="生活照料" key="2">
                <Text
                  dataSource={{
                    gutter: [24, 12],
                    span: 8,
                    color: ["#ef7d3a"],
                    content: ["每日母乳指导/配方奶粉定时喂养 ","婴儿溢奶处理","每日营养辅食的制作及喂养","每日科学喂水","每日进食日记记录","每日洗浴及身体护理","每日眼耳鼻清理","每日婴儿音乐抚触","每日被动操","每日口腔护理","每日耳边观察及清洁处理","每日睡眠照护/睡眠习惯培养","每日婴儿体温测量","每日婴儿餐具消毒","每日婴儿衣物、卧具清洁及消毒","定期玩具消毒整理","每周修剪指甲","如厕习惯培养","婴儿日光浴、水浴","婴儿鹅口疮的观察","婴儿居室卫生清洁","婴儿红臀预防及处理","婴儿湿疹预防及简单护理","婴儿睡眠训练","早产儿护理"],
                  }}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="早期教育" key="3">
                <Text
                  dataSource={{
                    gutter: [24, 12],
                    span: 8,
                    color: ["#ef7d3a"],
                    content: ["大动作训练指导 ","精细动作训练指导","认知能力训练指导","语言能力训练指导","良好社会性行为培养","情商开发之德育教育","触觉能力训练","视觉能力训练","听觉能力训练","幼儿绘本故事讲叙","蒙氏教法"],
                  }}
                />
              </Tabs.TabPane>
            </Tabs>
          </Tabs.TabPane>
          <Tabs.TabPane tab="13-24个月宝宝" key="2">
          <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="日常保健" key="1">
                <Text
                  dataSource={{
                    gutter: [24, 12],
                    span: 8,
                    color: ["#ef7d3a"],
                    content: ["按时计划免疫 ","常见疾病预防及护理","每日阳光浴空气浴安全看护","每日身体状况观察与监测","每日出汗观察与处理","危险因素识别及安全隐患排除","意外伤害预防及急救","体格锻炼及户外活动","小儿推拿","常备药品及护理用品清单提供"],
                  }}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="生活照料" key="2">
                <Text
                  dataSource={{
                    gutter: [24, 12],
                    span: 8,
                    color: ["#ef7d3a"],
                    content: ["婴幼儿转奶断奶处理 ","每日营养辅食的制作及喂养","每日睡眠照护眠习惯培养","每日科学喂水","每日二遍观察及清洁处理","每日洗浴及身体护理","每日眼耳鼻清理","每日口腔护理","每日居室卫生清洁","每日餐具消毒","每日婴儿衣物、卧具清洁及消毒","每周修剪指甲","每周被褥洗晒","婴幼儿外出准备和护理","婴幼儿营养方案定制","良好饮食习惯培养","如厕习惯培养","自行行为卫生培养","常见幼儿挑食、厌食分析证","宝宝挑食、厌食的纠正","服饰搭配指导","每日进食日记","早产儿饮食的特殊搭配方案"],
                  }}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="早期教育" key="3">
                <Text
                  dataSource={{
                    gutter: [24, 12],
                    span: 8,
                    color: ["#ef7d3a"],
                    content: ["大动作训练指导 ","精细动作训练指导","认知能力训练指导","语言能力训练指导","良好社会性行为培养","情商开发之德育教育","触觉能力训练","视觉能力训练","听觉能力训练","幼儿绘本故事讲叙","蒙氏教法"],
                  }}
                />
              </Tabs.TabPane>
            </Tabs>
          </Tabs.TabPane>
          <Tabs.TabPane tab="25-36个月宝宝" key="3">
          <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="日常保健" key="1">
                <Text
                  dataSource={{
                    gutter: [24, 12],
                    span: 8,
                    color: ["#ef7d3a"],
                    content: ["按时计划免疫 ","常见疾病预防及护理","每日阳光浴 空气浴","安全看护","每日身体状况观察与监测","每日出汗观察与处理","危险因素识别及安全隐患排除","意外伤害预防及急救","体格锻炼及户外活动","小儿推拿","常备药品及护理用品清单提供"],
                  }}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="生活照料" key="2">
                <Text
                  dataSource={{
                    gutter: [24, 12],
                    span: 8,
                    color: ["#ef7d3a"],
                    content: ["每日营养餐制作","每日科学指导营养餐的合理安排 ","每日睡眠照护/睡眠习惯培养 ","每日科学饮水指导 ","每日二便观察及清洁处理 ","每日洗浴及身体护理 ","每日眼耳鼻清理 ","每日口腔护理 ","每日居室卫生清洁 ","每日餐具消毒 ","每日婴儿衣物、卧具清洁及消毒 ","每周修剪指甲 ","每周被辱洗晒 ","婴幼儿外出准备和护理 ","婴幼儿营养菜搭配方案 ","良好饮食习惯培养 ","如厕习惯培养 ","自行行为卫生培养 ","常见饮食异常分析纠正 ","特殊时期（如不适） ","饮食指导 ","每日进食日记 ","服饰搭配指导"],
                  }}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="早期教育" key="3">
                <Text
                  dataSource={{
                    gutter: [24, 12],
                    span: 8,
                    color: ["#ef7d3a"],
                    content: ["大动作训练指导 ","精细动作训练指导","认知能力训练指导","语言能力训练指导","良好社会性行为培养","情商开发之德育教育","触觉能力训练","视觉能力训练","听觉能力训练","幼儿绘本故事讲叙","蒙氏教法"],
                  }}
                />
              </Tabs.TabPane>
            </Tabs>
          </Tabs.TabPane>
        </Tabs>
      </div>,
      <Production1
        id="xianshangyuyue"
        key="xianshangyuyue"
        dataSource={{
          title: '育婴师展示',
          data: [
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
                title: '金牌育婴',
                subtitle: '全国连锁 放心选择',
                extra: (
                  <div>
                    <span style={{ fontSize: 15, color: 'red' }}>￥6980</span>/起<span style={{ fontSize: 12 }}>（ 全国）</span>
                  </div>
                )
              },
              button: '立即预约'            
            },
          ]
        }}
        isMobile={this.state.isMobile}
      />,
      <Point
        key="list"
        data={[
          'Banner1_0',
          'text1',
          'yys',
          'xianshangyuyue',
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
