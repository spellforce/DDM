import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';

function Content1(props) {
  const { ...tagProps } = props;
  const { dataSource, isMobile } = tagProps;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  const { titleWrapper, centents } = dataSource;
  const animType = {
    queue: isMobile ? 'bottom' : 'right',
    one: isMobile
      ? {
          scaleY: '+=0.3',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        }
      : {
          x: '-=30',
          opacity: 0,
          type: 'from',
          ease: 'easeOutQuad',
        },
  };
  return (
    <div {...tagProps} {...dataSource.wrapper}>
      <div {...titleWrapper} style={{ marginTop: 40 }}>
          {titleWrapper.children.map(getChildrenToRender)}
      </div>
      {
        centents.map(centent => (
          <Row gutter={24} key={centent.title.children}><Col span={14} offset={6}>
          <OverPack {...centent.OverPack} component={Row} style={{marginTop:30}}>
            <TweenOne
              key="img"
              animation={animType.one}
              resetStyle
              {...centent.imgWrapper}
              component={Col}
              componentProps={{
                md: centent.imgWrapper.md,
                xs: centent.imgWrapper.xs,
              }}
            >
              <span {...dataSource.img}>
                <img src={centent.img.children} style={{ width: 258,height: 170 }} alt="img" />
              </span>
            </TweenOne>
            <QueueAnim
              key="text"
              type={animType.queue}
              leaveReverse
              ease={['easeOutQuad', 'easeInQuad']}
              {...centent.textWrapper}
              component={Col}
              componentProps={{
                md: centent.textWrapper.md,
                xs: centent.textWrapper.xs,
              }}
            >
              <h2 key="h1" {...centent.title}>
                {centent.title.children}
              </h2>
              <div key="p" {...centent.content}>
                {centent.content.children}
              </div>
            </QueueAnim>
          </OverPack>
          </Col></Row>
        ))
      }
    </div>
  );
}

export default Content1;
