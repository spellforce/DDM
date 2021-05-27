import React from 'react';

export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg3' },
        // title: {
        //   className: 'banner1-title',
        //   children:
        //   banner1,
        // },
        // content: {
        //   className: 'banner1-content',
        //   children: '一个高效的页面动画解决方案',
        // },
        // button: { className: 'banner1-button', children: 'Learn More' },
      },
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式业务接入',
            },
            { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式事中风险监控',
            },
            {
              name: 'content',
              children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式数据运营',
            },
            {
              name: 'content',
              children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '优势' }],
  },
  centents: [
    {
      imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
      img: {
        children: '/images/youshi/zhuanye.jpg',
      },
      textWrapper: { className: 'content1-text', md: 14, xs: 24 },
      title: { className: 'content1-title', children: '专业性强' },
      content: {
        className: 'content1-content',
        children: (
          <div>
            √ 所有阿姨持三证上岗<br/>
            √ 岗前培训24h守护360呵护<br/>
            √ 理论学习，实景演练，专业考核<br/>
            √ 掌握母婴护理必备41技能
          </div>
        )
      },
    }, 
    {
      imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
      img: {
        children: '/images/youshi/yanxuan.jpg',
      },
      textWrapper: { className: 'content1-text', md: 14, xs: 24 },
      title: { className: 'content1-title', children: '严选阿姨' },
      content: {
        className: 'content1-content',
        children: (
          <div>
            √ 3次面试  20选1标准<br/>
            √ 四项社会关系调查<br/>
            √ 全面身体检查<br/>
            √ 信用及犯罪记录背调<br/>
          </div>
        )
      },
    },
    {
      imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
      img: {
        children: '/images/youshi/guanai.jpg',
      },
      textWrapper: { className: 'content1-text', md: 14, xs: 24 },
      title: { className: 'content1-title', children: '关爱疫情' },
      content: {
        className: 'content1-content',
        children: (
          <div>
            √核酸检查 √消毒上户 <br/>
            √上户全部防控保护 <br/>
            √上户前防护培训；
          </div>
        )
      },
    },

    {
      imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
      img: {
        children: '/images/youshi/VIP.jpg',
      },
      textWrapper: { className: 'content1-text', md: 14, xs: 24 },
      title: { className: 'content1-title', children: 'VIP服务' },
      content: {
        className: 'content1-content',
        children: (
          <div>
            √ 售前贴心服务<br/>
            √ 售后多对一服务<br/>
            √ VIP式7次回访<br/>
            √ 完美孕期12项宝妈必备技能教授<br/>
            √ 120多项服务细则，服务细致全面
          </div>
        )
      },
    },
    {
      imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
      img: {
        children: '/images/youshi/suishi.jpg',
      },
      textWrapper: { className: 'content1-text', md: 14, xs: 24 },
      title: { className: 'content1-title', children: '随时退换' },
      content: {
        className: 'content1-content',
        children: (
          <div>
            √7天不满意随时退换<br/>
            √随时换 随时退 随心选
          </div>
        )
      },
    },{
      imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
      img: {
        children: '/images/youshi/pinpai.jpg',
      },
      textWrapper: { className: 'content1-text', md: 14, xs: 24 },
      title: { className: 'content1-title', children: '品牌标准化' },
      content: {
        className: 'content1-content',
        children: (
          <div>
            √护理操作标准<br/>
            √招聘岗前标准<br/>
            √服务回访标准<br/>
            √生活礼仪标准<br/>
            √每日工作流程标准
          </div>
        )
      },
    },
  ]
  
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于阿里云强大的基础资源',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '企业资源管理' },
          content: {
            className: 'content3-content',
            children:
              '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云安全' },
          content: {
            className: 'content3-content',
            children:
              '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '云监控' },
          content: {
            className: 'content3-content',
            children:
              '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '移动' },
          content: {
            className: 'content3-content',
            children:
              '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '分布式中间件' },
          content: {
            className: 'content3-content',
            children:
              '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: { className: 'content3-title', children: '大数据' },
          content: {
            className: 'content3-content',
            children:
              '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
