import { AUTHORITIES } from 'app/config/constants';

export default [
  {
    key: '/',
    icon: 'UserOutlined',
    label: '首页',
    i18: 'global.menu.home'
  },
  {
    key: '/admin',
    icon: 'VideoCameraOutlined',
    label: '管理',
    i18: 'global.menu.admin.main',
    authority: [AUTHORITIES.ADMIN],
    children: [
      {
        key: '/metrics',
        icon: 'VideoCameraOutlined',
        label: '资源监控',
        i18: 'global.menu.admin.metrics'
      },
      {
        key: '/health',
        icon: 'VideoCameraOutlined',
        label: '服务状态',
        i18: 'global.menu.admin.health'
      }]
  }];
