import React from 'react';
import { Row, Col, Tag } from 'antd';
import './index.less';

const data = {
  title: 'Title',
  subtitle: '',
  gutter: [24, 40],
  span: 8,
  width: 140,
  height: 140,
  color: [],
  content: []
};

export default ({ dataSource = data, ...rest }) => {
  
  const { title, subtitle, gutter = [24, 40], span = 8, width = 140, height = 140, content, color = ["#108ee9"] } = dataSource;

  const getColor = index => {
    const i = index % color.length;
    return color[i];
  }

  return (
    <div className="tab-text" {...rest}>
      { title && <div className="title-wrapper">
        <h1 className="title">{title}</h1>
        {
          subtitle && (typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle.map(v => <p key={v}>{v}</p>))
        }
      </div> }
      <Row gutter={gutter} className="content" justify="space-around" align="middle">
        {
          content.map((text, index) => (
            <Col span={span} key={text}>
              <Tag color={getColor(index)} className="tag">{text}</Tag>
            </Col>
          ))
        }
      </Row>
    </div>
  )
};