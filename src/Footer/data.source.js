import React from 'react';
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 8,
        className: 'block',
        title: {
          className: 'logo',
          children:
            '叮当妈',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: '关爱您和孩子的健康成长，请选择我们',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 8,
        className: 'block',
        title: { children: '联系方式' },
        childWrapper: {
          children: [
            { name: 'link0', href: 'javascript:;', children: '电话: 0731-84027228' },
            { name: 'link1', href: 'javascript:;', children: '网站:' },
            { name: 'link3', href: 'javascript:;', children: '地址：湖南长沙经济开发区开元东路59号博雅例外29楼'},
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 8,
        className: 'block',
        title: { children: '联系我们' },
        childWrapper: {
          children: [
            { href: 'javascript:;', name: 'link0', children: <img src="/images/contact/fuwu.jpg" style={{ width: 160, height: 160 }} alt="服务号"/> },
            { href: 'javascript:;', name: 'link1', children: <img src="/images/contact/public.jpg" style={{ width: 160, height: 160 }} alt="母婴公众号"/> },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2021 by ddm All Rights
        Reserved
      </span>
    ),
  },
};
