import React from 'react';
import * as Icon from '@ant-design/icons';
import { Translate, translate } from 'react-jhipster';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import menuItems from './menu-config'
export * from './account';
export * from './admin';
export * from './locale';
export * from './entities';

const menus = (menuItems, parentPath: string, authority?: string[]): ItemType[] => {
  const items: ItemType[] = [];
  menuItems.forEach(item => {
    if (hasAnyAuthority(authority, item.authority)) {
      const menu = {
        key: parentPath ? (parentPath + item.key) : item.key,
        icon: React.createElement(Icon[item.icon]),
        label: <Translate contentKey={item.i18}>{item.label}</Translate>,
        title: translate(item.i18)
      } as ItemType;
      if (item.children && item.children.length > 0) {
        menu['children'] = menus(item.children, item.key, authority);
      }
      items.push(menu);
    }
  });
  return items;
};
export const getMenus = (authority?: string[]) => {
  return menus(menuItems, '', authority);
};
