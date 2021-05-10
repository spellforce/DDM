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
import Text from '../components/Content/Text';
import f1 from './images/f1.jpg';
import f2 from './images/f2.jpg';
import f3 from './images/f3.jpg';
import f4 from './images/f4.jpg';
import f5 from './images/f5.jpg';
import f6 from './images/f6.jpg';
import f7 from './images/f7.jpg';
import f8 from './images/f8.jpg';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

const data1 = ["宝宝洗澡2", "宝宝穿脱衣服", "宝宝打包被", "宝宝换尿布", "宝宝抚触", "宝宝被动操", "宝宝游泳", "宝宝喂药", "冲调奶粉", "宝宝拍嗝", "宝宝衣物清洗", "宝宝食具奶具消毒", "宝宝脐带消毒", "宝宝肠绞痛护理", "宝宝黄疸护理", "鹅口疮护理", "湿疹护理",
"营养性疾病预防护理",  "宝宝大小便观察", "特殊新生儿护理", "宝宝便秘护理", "预防接种", "窒息急救处理", "烫伤预防与护理", "皮下血肿预防护理",
"孕期保健", "产妇产前准备", "产后心理指导", "产妇常见疾病", "产妇术后护理", "产褥期护理", "产后科学喂奶", "产后营养月子餐搭配原则",
"产妇月子餐制作", "产后恢复操", "洗头洗脸洗屁股", "物品用具消毒", "主被动操", "给宝宝喂配方奶", "哺乳姿势", "宝宝早期教育", "小儿生长发育特征"];

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
          title: "母婴护理师必学的42项必备技能",
          gutter: [24, 24],
          span: 4,
          color: ["#108ee9", "#87d068"],
          content: data1,
        }}
      />,
      <Picture
        id="pic3"
        dataSource={{
          title: '服务流程',
          gutter: [24, 0],
          span: 24,
          width: 1100,
          height: 320,
          content: [
            {
              imgUrl: f1,
            },
            {
              imgUrl: f2,
            },
            {
              imgUrl: f3,
            },
            {
              imgUrl: f4,
            },
            {
              imgUrl: f5,
            },
            {
              imgUrl: f6,
            },
            {
              imgUrl: f7,
            },
            {
              imgUrl: f8,
            }
          ]
        }}
        isMobile={this.state.isMobile}
      />,
      <Text 
        id="text2"
        dataSource={{
          title: "科学月嫂的严选之路",
          subtitle: ["理论+实操+真实场景", "12项严苛筛查 科学月嫂中优选"],
          gutter: [24, 24],
          span: 4,
          color: ["#108ee9", "#87d068"],
          content: ["身份实名核实",  "权威机构体检", "背景品行调查"  ,"仪表卫生检查",
            "言谈举止评测",  "性格修养审核" ,"实操技能评测"  ,"服务水平鉴定",
            "用户口碑调查"  ,"理论知识审核" ,"工作经验要去" , "技能证书审核",
            ],
        }}
      />,
      <Production1
        id="xianshangyuyue"
        key="xianshangyuyue"
        dataSource={{
          title: '月嫂展示',
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
        ]
        }}
        isMobile={this.state.isMobile}
      />,
      <Point
        key="list"
        data={[
          'Banner1_0',
          'text1',
          'pic3',
          'text2',
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
