import React from 'react';
import { Row, Col } from 'antd';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './index.less';
const BgElement = Element.BgElement;

const data = {
  title: 'Title',
  subtitle: '',
  gutter: [24, 40],
  span: 8,
  width: 140,
  height: 140,
  content: [
    {
      title: "",
      urls: ['/images/youshi/pinpai.jpg'],
    }
  ]
};

export default ({ dataSource = data, ...rest }) => {
  
  const { title, subtitle, gutter = [24, 40], span = 8, width = 140, height = 140,content } = dataSource;
  return (
    <div className="scorll-picture" {...rest}>
      <div className="title-wrapper">
        <h1 className="title">{title}</h1>
        {
          subtitle && (typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle.map(v => <p key={v}>{v}</p>))
        }
      </div>
      
      <Row gutter={gutter} className="content" justify="space-around" align="middle">
        {/* <Col span={span}>
          <p className="title">2-12个月宝宝</p>
          <BannerAnim prefixCls="banner-user" autoPlay>
              <Element 
                prefixCls="banner-user-elem"
                key="0"
              >
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    background: '#364D79',
                  }}
                />
                <img src="/images/youshi/pinpai.jpg"  width="100%" height="100%" />
              </Element>
              <Element 
                prefixCls="banner-user-elem"
                key="1" 
              >
                <BgElement
                  key="bg"
                  className="bg"
                  style={{
                    background: '#64CBCC',
                  }}
                />
                <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                  Ant Motion Banner
                </TweenOne>
                <TweenOne className="banner-user-text" 
                  animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                >
                  The Fast Way Use Animation In React
                </TweenOne>
              </Element>
            </BannerAnim>
            </Col> */}
        {
          content.map(({title, urls = []}) => (
            <Col span={span}>
            <p className="title">{title}</p>
            <BannerAnim prefixCls="banner-user" autoPlay>
              {
                urls.map(url => (
                  <Element 
                    prefixCls="banner-user-elem"
                    key="0"
                  >
                    <BgElement
                      key="bg"
                      className="bg"
                      style={{
                        background: '#364D79',
                      }}
                    />
                    <img src={url}  width="100%" height="100%" alt="" />
                  </Element>
                ))
              }
            </BannerAnim>
            </Col>
          ))
        }
      </Row>
    </div>
  )
};