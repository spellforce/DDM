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
import { Tabs } from 'antd';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location = {} } = typeof window !== 'undefined' ? window : {};

const data1 = ["宝宝洗澡2","宝宝穿脱衣服","宝宝打包被","宝宝换尿布","宝宝抚触","宝宝被动操","宝宝游泳","宝宝喂药","冲调奶粉","宝宝拍嗝","宝宝衣物清洗","宝宝食具奶具消毒","宝宝脐带消毒","宝宝肠绞痛护理","宝宝黄疸护理","鹅口疮护理","湿疹护理",
"营养性疾病预防护理","宝宝大小便观察","特殊新生儿护理","宝宝便秘护理","预防接种","窒息急救处理","烫伤预防与护理","皮下血肿预防护理",
"孕期保健","产妇产前准备","产后心理指导","产妇常见疾病","产妇术后护理","产褥期护理","产后科学喂奶","产后营养月子餐搭配原则",
"产妇月子餐制作","产后恢复操","洗头洗脸洗屁股","物品用具消毒","主被动操","给宝宝喂配方奶","哺乳姿势","宝宝早期教育","小儿生长发育特征"];

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
          title:"母婴护理师必学的42项必备技能",
          gutter: [24, 24],
          span: 4,
          color: ["#108ee9","#87d068"],
          content: data1,
        }}
      />,
      <div style={{ padding:"64px 104px"}} id="pic3">
        <div className="title-wrapper">
          <h1 className="title">月嫂服务内容</h1>
        </div>  
        <Tabs defaultActiveKey="1" type="card">
          <Tabs.TabPane tab="个性化孕期营养健康定制服务" key="1">
            <Text
              dataSource={{
                gutter: [24, 12],
                span: 8,
                color: ["#ef7d3a"],
                content: ["按时计划免疫","常见疾病预防及护理","每日阳光浴空气浴安全看护","每日身体状况观察与监测","每日出汗观察与处理","危险因素识别及安全隐患排除","意外伤害预防及急救","体格锻炼及户外活动","小儿推拿","常备药品及护理用品清单提供"],
              }}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="医院陪护服务" key="2">
          <Text
              dataSource={{
                gutter: [24, 12],
                span: 8,
                color: ["#ef7d3a"],
                content: ["长沙市内医院","24H陪护","妈妈日常护理记录","母婴生活照料","产妇生产后擦身","协助产妇如厕","协助产妇更换衣服","清洗产妇衣物","协助产妇面部及口腔清洁","协助产妇下床活动","新生儿大小便观察及护理","母乳喂养指导","协助产妇开奶","新生儿喂养后拍嘱护理","新生儿睡姿观察并调整","尿滞留预防及护理","肠粘黏预防及护理","下肢静脉血预防","新生儿防溢奶、呛奶护理","产妇用药准备及提醒","协助医护工作及叮咛"],
              }}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="产妇驻家服务" key="3">
          <Text
              dataSource={{
                gutter: [24, 12],
                span: 8,
                color: ["#ef7d3a"],
                content: ["健康数据记录","伤口观察及消毒","恶露情况观察（恶露结束前）","产妇床单更换、机洗","产妇房间打扫、通风","产妇贴身衣物清洗","产妇情绪与心理疏导","汉方擦浴（根据恶露排泄情况，两周后）","汉方足浴（根据恶露排泄情况，两周后）","在岗产妇护理知识传授","妊娠期高血糖、高血压专业护理经验","产后放松按摩","睡姿调整","趾骨联合分离护理","便秘痔疮的预防及护理","妊娠糖尿病等疾病的护理","专业护士上门查体、黄痘观察、伤口护理（按需）" ],
              }}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="母乳喂养指导" key="4">
          <Text
              dataSource={{
                gutter: [24, 12],
                span: 8,
                color: ["#ef7d3a"],
                content: ["提倡科学母乳喂养","正确姿势指导","乳房清洁和护理","吸奶器正确使用","吸奶用具消毒","乳腺炎的护理","生理性乳胀的预防和护理","乳头玻裂预防及护理","催乳","乳腺疏通","乳房异常观察","防止乳腺炎","早产儿母乳喂养","乳头扁平内陷的处理","乳房疼痛的分析与处理","专业母乳指导上门（按需）","专业护士上门查体、黄痘观察、伤口护理（按需）"],
              }}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="新生儿驻家服务" key="5">
          <Text
              dataSource={{
                gutter: [24, 12],
                span: 8,
                color: ["#ef7d3a"],
                content: ["科学母乳喂养、混合喂养或人工喂养","定期体重测量记录","二便观察及护理","日光浴","新生儿精神状态观察","奶具清洁与消毒","溢奶处理","喂养后拍味","健康数据记录","沐浴","五官护理","脐带护理","臀部护理","抚触、被动操","排气操","尿布更换","新生儿房间打扫通风","睡姿观察、调整","黄痘观察、护理、记录","哭闹安抚","在岗期间传授母婴护理操作","呛奶急救","海姆立克急救法","肠绞痛的安抚与护理","早产儿专业护理经验","多胞胎专业护理经验","鹅口疮的预防和护理","鼻泪管堵塞的辨别与护理","髓关节观察与护理","新生儿用品专业建议","常见疾病的辨别及护理","新生儿头型调整","婴幼儿睡眠管理","婴幼儿皮肤管理","婴幼儿大便管理","异常疾病的辨别与护理 "],
              }}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="新生儿早早教服务" key="6">
          <Text
              dataSource={{
                gutter: [24, 12],
                span: 8,
                color: ["#ef7d3a"],
                content: ["新生儿听觉训练——（小玩具、故事卡、音乐）","新生儿视觉训练——（黑白卡、故事卡等）","新生儿感统训练——（抚触球）","新生儿运动系统训练——（关节伸展、手抓握）","新生儿俯卧及抬头训练"],
              }}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="月子餐及产后恢复服务" key="7">
          <Text
              dataSource={{
                gutter: [24, 12],
                span: 8,
                color: ["#ef7d3a"],
                content: ["月子餐烹饪制作（三餐）,家属采购食","产后基本营养方案","结合需求制作个性化月子餐","月子餐点心，茶饮制作","凯格尔训练","绑束腹带","产后恢复操","子宫复旧按摩"],
              }}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>,
      <Text 
        id="text2"
        dataSource={{
          title:"科学月嫂的严选之路",
          subtitle: ["理论+实操+真实场景","12项严苛筛查 科学月嫂中优选"],
          gutter: [24, 24],
          span: 4,
          color: ["#108ee9","#87d068"],
          content: ["身份实名核实","权威机构体检","背景品行调查"  ,"仪表卫生检查",
          "言谈举止评测","性格修养审核" ,"实操技能评测"  ,"服务水平鉴定",
          "用户口碑调查"  ,"理论知识审核" ,"工作经验要去" ,"技能证书审核",
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
