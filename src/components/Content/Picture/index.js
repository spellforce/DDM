import React from 'react';
import { Row, Col } from 'antd';
import './index.less';

const data = {
  title: 'Title',
  subtitle: '',
  gutter: [24, 40],
  span: 8,
  width: 140,
  height: 140,
  content: [
    {
      imgUrl: '/images/youshi/pinpai.jpg',
    }
  ]
};

export default ({ dataSource = data, ...rest }) => {
  
  const { title, subtitle, gutter = [24, 40], span = 8, width = 140, height = 140,content } = dataSource;
  return (
    <div className="picture" {...rest}>
      <div className="title-wrapper">
        <h1 className="title">{title}</h1>
        {
          subtitle && (typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle.map(v => <p key={v}>{v}</p>))
        }
      </div>
      <Row gutter={gutter} className="content" justify="space-around" align="middle">
        {
          content.map(item => (
            <Col span={span} key={item.imgUrl}>
              <div className="pic">
                <img src={item.imgUrl} alt="" style={{width,height}}></img>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  )
};