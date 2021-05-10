import React from 'react';
import { Row, Col, Button } from 'antd';
import './index.less';

const data = {
  title: 'Title',
  data: [{
    imgUrl: '/images/youshi/pinpai.jpg',
    content: {
      title: 'Title',
      subtitle: 'Title2',
      extra: (
        <div>
          111
        </div>
      )
    },
    button: '立即预约'
  }]
};

export default ({ dataSource = data, ...rest }) => {
  
  return (
    <div className="production1" {...rest}>
      <div className="title-wrapper">
        <h1 className="title">{dataSource.title}</h1>
        {
          dataSource.subtitle && (typeof dataSource.subtitle === "string" ? <p>{dataSource.subtitle}</p> : dataSource.subtitle.map(v => <p key={v}>{v}</p>))
        }
      </div>
      <Row gutter={[24, 40]} className="content">
        {
          dataSource.data.map(item => (
            <Col span={8} key={item.content.title}>
              <Row gutter={24} justify="space-around" align="middle">
                <Col span={12}>
                  <div className="pic">
                    <img src={item.imgUrl} alt=""></img>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="title">{item.content.title}</div>
                  <div className="subtitle">{item.content.subtitle}</div>
                  {item.content.extra}
                  <Button type="primary" className="button">{item.button}</Button>
                </Col>
              </Row>
            </Col>
          ))
        }
      </Row>
    </div>
  )
};